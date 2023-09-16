"use client";

import { Input } from "./Input";
import { NoteCard } from "./NoteCard";


export const NoteEditor = ({ NoteData }) => {
 

  return (
    <div className="space-y-8">
      <Input />
      <div className="space-y-4">
        {NoteData.map(({ content, id }) => {
          return <NoteCard key={id} content={content} id={id} />;
        })}
      </div>
    </div>
  );
};
