"use client";

import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import type { ColumnId, Task } from "../lib/types";
import TaskCard from "./TaskCard";

export default function Column({
  id,
  label,
  tasks,
  onRemove,
  onAdd,
}: {
  id: ColumnId;
  label: string;
  tasks: Task[];
  onRemove: (id: string) => void;
  onAdd: (title: string, color: string, columnId: ColumnId) => void;
}) {
  const { setNodeRef, isOver } = useDroppable({ id });
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, "#8B2E2E", id);
    setTitle("");
    setAdding(false);
  }

  return (
    <div
      ref={setNodeRef}
      className={`flex w-full flex-col rounded-md border p-4 transition sm:w-72 ${
        isOver
          ? "border-[#B08942] bg-[#B08942]/10"
          : "border-[#4A3C28] bg-[#241C14]"
      }`}
    >
      <div className="mb-4 flex items-center justify-between border-b border-[#4A3C28] pb-3">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-[#E9DFC4]">
          {label}
        </h2>
        <span className="font-[family-name:var(--font-display)] text-xs text-[#B08942]">
          {tasks.length}
        </span>
      </div>

      <div className="flex flex-col gap-3.5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onRemove={onRemove} />
        ))}
      </div>

      {adding ? (
        <form onSubmit={handleSubmit} className="mt-3">
          <input
            autoFocus
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => !title && setAdding(false)}
            placeholder="Nova tarefa..."
            className="w-full rounded-sm border border-[#4A3C28] bg-[#1B140D] px-3 py-2.5 font-[family-name:var(--font-body)] text-sm text-[#E9DFC4] outline-none focus:border-[#B08942]"
          />
        </form>
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="mt-3 rounded-sm px-3 py-2.5 text-left font-[family-name:var(--font-display)] text-xs uppercase tracking-wide text-[#A9987A] transition hover:bg-white/5"
        >
          + Nova tarefa
        </button>
      )}
    </div>
  );
}
