"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const Input = () => {
  const router = useRouter();
  const [content, setContent] = useState("");

  const handleCreateNote = async () => {
    const res = await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: content, user: "tommy@purba.com" }),
      }
    );
    const data = await res.json();
    setContent("")
    router.refresh();
  };

  return (
    <div className="">
      <div className="text-xl text-center font-bold uppercase mb-2">Todo List</div>
      <div className="flex gap-4">
        <input value={content} onChange={(e) => setContent(e.target.value)} placeholder="Todo ..." />
        <button className="w-fit btn_a uppercase" onClick={handleCreateNote}>
          add
        </button>
      </div>
    </div>
  );
};
