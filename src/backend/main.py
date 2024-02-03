from typing import Union
import whisper
from fastapi import FastAPI , File, UploadFile
import shutil
import tempfile
import os
import certifi

os.environ['SSL_CERT_FILE'] = certifi.where()


app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

# Load the Whisper model

model = whisper.load_model("small", device = "cpu")

@app.post("/transcribe/")
async def transcribe_audio(file: UploadFile = File(...)):
    # Use a more generic temporary file without specifying the extension
    with tempfile.NamedTemporaryFile(delete=False) as tmp_file:
        shutil.copyfileobj(file.file, tmp_file)
        tmp_file_path = tmp_file.name
        tmp_file.close()
        # tmp_file.seek(0)  # Move to the beginning of the file for reading

        # Load the audio and perform transcription
        audio = whisper.load_audio(tmp_file_path)
        result = model.transcribe(audio)
        transcibed_text = result.get("text", "transcritpion failed")

        os.unlink(tmp_file_path)

        return {"transcription": transcibed_text}
    
    