"use client"
import React, { useState } from 'react';
import {Button} from "@nextui-org/button";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '2px dashed #007BFF',
    borderRadius: '5px',
    marginTop: '20px',
  },
  input: {
    margin: '10px 0',
  },
  button: {
    cursor: 'pointer',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
  },
  fileInfo: {
    marginTop: '10px',
  },
};


const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.type === 'audio/mp3' || file.type === 'audio/m4a' || file.type === 'video/mp4') {
        setSelectedFile(file);
      } else {
        alert('Please select an mp3, m4a, or mp4 file.');
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Here you can implement the code to send the formData to your server
      // For example:
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData,
      // });
      // const data = await response.json();
      // console.log(data);

      alert('File is ready to be uploaded.');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <input type="file" onChange={handleFileChange} accept=".mp3,.m4a,.mp4" style={styles.input} />
        <Button color="primary" variant="ghost" type = 'submit'>
          Upload File
      </Button>  
      </form>
      {selectedFile && <p style={styles.fileInfo}>File name: {selectedFile.name}</p>}
    </div>
  );
};

export default FileUpload;

