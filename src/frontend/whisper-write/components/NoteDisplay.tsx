import React from "react";

interface NoteDisplayProps {
  note: string;
}

const NoteDisplay: React.FC<NoteDisplayProps> = ({ note }) => {
  // Split the note content into individual bullet points based on the bullet point character and new lines
  const bulletPoints = note.split(/\n\s*•\s*/);

  return (
    <div>
      <h3>Note:</h3>
      <ul>
        {bulletPoints.map((point, index) => {
          // Avoid rendering empty list items for any leading/trailing split artifacts
          if (point) {
            return <li key={index}>{point}</li>;
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default NoteDisplay;
