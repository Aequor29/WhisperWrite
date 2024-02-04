"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { Asap_Condensed } from "next/font/google";

interface FileUploadProps {
  onTranscribe: (transcription: string) => void;
  onProcessing: (processing: boolean) => void;
}
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column' as const,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px',
//     border: '2px dashed #007BFF',
//     borderRadius: '5px',
//     marginTop: '20px',
//   },
//   input: {
//     margin: '10px 0',
//   },
//   button: {
//     cursor: 'pointer',
//     padding: '10px 20px',
//     backgroundColor: '#007BFF',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     fontSize: '16px',
//   },
//   fileInfo: {
//     marginTop: '10px',
//   },
// };
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px", // Increased padding
    border: "2px dashed #007BFF",
    borderRadius: "10px", // Slightly larger border radius
    marginTop: "20px",
    width: "80%", // Larger width
    maxWidth: "600px", // Maximum width
    minHeight: "200px", // Minimum height to make it look larger
    boxSizing: "border-box",
  },
  input: {
    margin: "10px 0",
    fontSize: "1.25rem", // Larger font size for better visibility
    padding: "10px", // Larger padding for better click/tap area
    cursor: "pointer", // Cursor changes to pointer when hovering over input
  },
  fileInfo: {
    marginTop: "10px",
    fontSize: "1.25rem", // Larger font size for file info
  },
};

const FileUpload: React.FC<FileUploadProps> = ({
  onTranscribe,
  onProcessing,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (
        file.type === "audio/mpeg" ||
        file.type === "audio/x-m4a" ||
        file.type === "video/mp4" ||
        file.type === "audio/wav"
      ) {
        setSelectedFile(file);
        alert("File is ready to be uploaded.");
      } else {
        alert("Please select an mp3, m4a, mp4 or wav file.");
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedFile) {
      onProcessing(true);
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch("http://127.0.0.1:8000/transcribe/", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        onTranscribe(data.transcribed_text);
        // setTranscription(data.transcribed_text); // Assuming the response contains a field 'transcribedText'
        // console.log(data);
      } catch (error) {
        console.error("There was an error uploading the file", error);
        onProcessing(false);
      }
      // Here you can implement the code to send the formData to your server
      // For example:
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData,
      // });
      // const data = await response.json();
      // console.log(data);
    }
  };

  return (
    <div style={styles.container as React.CSSProperties}>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".mp3,.m4a,.mp4, .wav"
          style={styles.input}
        />
        <Button
          color="primary"
          variant="ghost"
          type="submit"
        >
          Upload File
        </Button>
      </form>
      {selectedFile && (
        <p style={styles.fileInfo}>File name: {selectedFile.name}</p>
      )}
    </div>
  );
};

export default FileUpload;
