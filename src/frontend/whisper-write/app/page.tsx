"use client";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
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
      setIsProcessing(true);
      const response = await fetch("http://127.0.0.1:8000/summarize", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      setIsProcessing(false);
      setNote(data);
      setShowGetNoteButton(false); // Hide the GETNOTE button
    } catch (error) {
      console.error("There was an error fetching the note", error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1 className={title({ color: "blue" })}>WhispWrite</h1>
      <h2 className={subtitle()}>
        Your AI transcriptionist and Note Taker that only works for you
      </h2>
      {isProcessing && (
        <Spinner size="lg" label="Processing..." color="warning" />
      )}
      {!isProcessing && !transcription && (
        <FileUpload
          onTranscribe={handleTranscription}
          onProcessing={handleProcessing}
        />
      )}
      {!isProcessing && transcription && !note && (
        <TranscriptionDisplay transcription={transcription} />
      )}
      {!isProcessing && showGetNoteButton && !note && (
        <Button variant="ghost" color="success" onClick={handleGetNote}>
          GET NOTE
        </Button>
      )}
      {note && <NoteDisplay note={note} />}
    </section>
  );
}
