from langchain_community.llms import Ollama
from langchain.prompts import PromptTemplate
from langchain.chains.summarize import load_summarize_chain
from langchain.text_splitter import CharacterTextSplitter
from langchain.docstore.document import Document

def map_reduce(transcribed_text):
    llm = Ollama(model="llama2:13b")
    map_prompt_template = """
                        Write a detailed summary of this chunk of text that includes the main points and as many as important details as you can.
                        {text}
                        """

    map_prompt = PromptTemplate(template=map_prompt_template, input_variables=["text"])

    combine_prompt_template = """
                        Write a detailed summary of the following text delimited by triple backquotes.
                        Return your response in bullet points which covers the key points of the text.
                        Separate each bullet point with a new line.
                        ```{text}```
                        BULLET POINT SUMMARY:
                        """

    combine_prompt = PromptTemplate(
        template=combine_prompt_template, input_variables=["text"]
    )

    map_reduce_chain = load_summarize_chain(
        llm,
        chain_type="map_reduce",
        map_prompt=map_prompt,
        combine_prompt=combine_prompt,
        return_intermediate_steps=False,
    )

    text_splitter = CharacterTextSplitter.from_tiktoken_encoder(
        chunk_size=1000, chunk_overlap=0
    )
    split_text = text_splitter.split_text(transcribed_text)
    docs = [Document(page_content=t) for t in split_text]

    result = map_reduce_chain.invoke(docs)

    return result['output_text']