from pydantic import BaseModel
from fastapi import FastAPI , File, HTTPException, UploadFile
from langchain_community.llms import Ollama
import shutil
import whisper
import tempfile
import os
import certifi

os.environ['SSL_CERT_FILE'] = certifi.where()


app = FastAPI()

# use to store the transcription data in memory, no database needed

class Transcript(BaseModel):
    def __init__(self, transcribed_text: str, file_name: str):
        self.transcribed_text = transcribed_text
        self.file_name = file_name

    transcribed_text: str
    file_name: str

transcript = Transcript("","")
# Load the Whisper model
model = whisper.load_model('base.en', device = "cpu")

@app.post("/transcribe/", response_model=Transcript)
async def transcribe_audio(file: UploadFile = File(...)):
    # Use a more generic temporary file without specifying the extension
    with tempfile.NamedTemporaryFile(delete=True) as tmp_file:
        shutil.copyfileobj(file.file, tmp_file)
        tmp_file_path = tmp_file.name
        tmp_file.seek(0)  # Move to the beginning of the file for reading

        # Load the audio and perform transcription
        audio = whisper.load_audio(tmp_file_path)
        result = model.transcribe(audio)
        transcribed_text = result.get("text", "transcription failed")

        if transcribed_text == "transcription failed":
            raise HTTPException(status_code = 400, detail = "Transcription failed")
        
        transcript.transcribed_text = transcribed_text
        transcript.file_name = file.filename
        
        return transcript

@app.get("/summarize/")
async def summarize_text(file_name: str):
    # Load the Ollama model
    llm = Ollama(model="llama2")
    prompt_template = "Summarize the following text: {transcript.transcribed_text}"
    print(transcript.transcribed_text)
    summary = llm.invoke(prompt_template)
    return summary  