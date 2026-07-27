"use client";

import {
  DndContext,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { useState } from "react";
import { useBoard } from "./lib/useBoard";
import { COLUMNS, type ColumnId } from "./lib/types";
import Column from "./components/Column";
import TaskCard from "./components/TaskCard";

export default function Home() {
  const { tasks, addTask, removeTask, moveTask, loaded } = useBoard();
  const [activeId, setActiveId] = useState<string | null>(null);

  if (!loaded) return null;

  const activeTask = tasks.find((t) => t.id === activeId);

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveId(null);

    if (over && over.id !== active.data.current?.columnId) {
      moveTask(active.id as string, over.id as ColumnId);
    }
  }

  return (
    <main className="relative z-10 mx-auto max-w-4xl px-6 py-16">
      <div className="mb-2 flex items-center gap-3 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-[#8B2E2E]">
        <span>✦</span>
        <span>Quadro de recompensas</span>
      </div>
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-[#E9DFC4]">
        Foco
      </h1>
      <p className="mt-2 font-[family-name:var(--font-body)] italic text-[#A9987A]">
        Organize suas tarefas arrastando entre os quadros.
      </p>

      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4">
          {COLUMNS.map((col) => (
            <Column
              key={col.id}
              id={col.id}
              label={col.label}
              tasks={tasks.filter((t) => t.columnId === col.id)}
              onRemove={removeTask}
              onAdd={addTask}
            />
          ))}
        </div>

        <DragOverlay>
          {activeTask ? (
            <TaskCard task={activeTask} onRemove={() => {}} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </main>
  );
}
