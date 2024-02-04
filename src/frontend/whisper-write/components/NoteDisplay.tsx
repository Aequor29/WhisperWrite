// NoteDisplay.tsx

import React from 'react';

interface NoteDisplayProps {
  note: string;
}

const NoteDisplay: React.FC<NoteDisplayProps> = ({ note }) => {
  return (
    <div>
      <h3>Note:</h3>
      <p>{note}</p>
    </div>
  );
};

export default NoteDisplay;
