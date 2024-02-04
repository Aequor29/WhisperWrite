"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
// page.tsx
// import React, { useState } from 'react';
// import FileUpload from "@/components/FileUpload";
// import { Spinner } from '@nextui-org/spinner';
// import TranscriptionDisplay from "@/components/TranscriptionDisplay";

// export default function Home() {
// 	const [transcription, setTranscription] = useState('');
//   	const [isProcessing, setIsProcessing] = useState(false);

// 	const handleTranscription = (newTranscription: string) => {
// 		setTranscription(newTranscription);
// 		setIsProcessing(false);
// 	};

// 	const handleProcessing = (processing: boolean) => {
// 		setIsProcessing(processing);
// 	};
// 	return (
// 		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
// 		 {isProcessing ? (
//         	<Spinner label="Processing..." color="warning" />
//       	) : transcription ? (
//         	<TranscriptionDisplay transcription={transcription} />
//       	) : (
//         	<FileUpload onTranscribe={handleTranscription} onProcessing={handleProcessing} />
//       	)}
//     	</section>
//   	);
// }
// page.tsx
import React, { useState } from "react";
import FileUpload from "@/components/FileUpload";
import TranscriptionDisplay from "@/components/TranscriptionDisplay";
import { Spinner } from "@nextui-org/spinner";
import NoteDisplay from "@/components/NoteDisplay";
import { Button } from "@nextui-org/button";

export default function Home() {
  const [transcription, setTranscription] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [note, setNote] = useState("");
  const [showGetNoteButton, setShowGetNoteButton] = useState(false);

  const handleTranscription = (newTranscription: string) => {
    setTranscription(newTranscription);
    setIsProcessing(false);
    setShowGetNoteButton(true);
  };

  const handleProcessing = (processing: boolean) => {
    setIsProcessing(processing);
  };

  const handleGetNote = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/summarize", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setNote(data); // Assume the backend sends back a "note" field
      setShowGetNoteButton(false); // Hide the GETNOTE button
    } catch (error) {
      console.error("There was an error fetching the note", error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {isProcessing && <Spinner label="Processing..." color="warning" />}
      {!isProcessing && !transcription && (
        <FileUpload
          onTranscribe={handleTranscription}
          onProcessing={handleProcessing}
        />
      )}
      {transcription && !note && (
        <TranscriptionDisplay transcription={transcription} />
      )}
      {showGetNoteButton && !note && (
        <Button onClick={handleGetNote}>GETNOTE</Button>
      )}
      {note && <NoteDisplay note={note} />}
    </section>
  );
}
