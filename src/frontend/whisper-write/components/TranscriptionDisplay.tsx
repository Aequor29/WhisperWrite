// TranscriptionDisplay.tsx
import React from 'react';

interface TranscriptionDisplayProps {
  transcription: string;
}

const TranscriptionDisplay: React.FC<TranscriptionDisplayProps> = ({ transcription }) => {
  if (!transcription) return null;

  return (
    <div>
      <h3>Transcription Result:</h3>
      <p>{transcription}</p>
    </div>
  );
};

export default TranscriptionDisplay;
