"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const NoteCard = ({ content, id }) => {
  const router = useRouter();
  const [NewContent, SetNewContent] = useState(content);
  const [editMode, setEditMode] = useState(false);

  const handledeleteNote = async () => {
    const res = await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "DELETE",
      }
    );
    router.refresh();
  };

  const handlupdateNote = async () => {
    const res = await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: NewContent }),
      }
    );
    const data = await res.json();
    setEditMode(false);
    router.refresh();
  };

  return (
    <div className="flex justify-between border-2 p-4 rounded-lg shadow gap-2">
      {editMode ? (
        <input
          value={NewContent || content}
          onChange={(e) => SetNewContent(e.target.value)}
        />
      ) : (
        <div>{content}</div>
      )}

      <div className="flex gap-4">
        {editMode ? (
          <button onClick={handlupdateNote} className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-check"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </button>
        ) : (
          <button onClick={() => setEditMode(true)} className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-pen"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            </svg>
          </button>
        )}

        <button className="btn" onClick={handledeleteNote}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};
