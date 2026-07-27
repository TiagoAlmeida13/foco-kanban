"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { Task } from "../lib/types";

export default function TaskCard({
  task,
  onRemove,
}: {
  task: Task;
  onRemove: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
    });

  const style = {
    transform: transform
      ? `${CSS.Translate.toString(transform)} rotate(${task.id.charCodeAt(0) % 2 === 0 ? "-1.5deg" : "1.5deg"})`
      : `rotate(${task.id.charCodeAt(0) % 2 === 0 ? "-1.5deg" : "1.5deg"})`,
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="group relative cursor-grab rounded-sm bg-[#F1E4C0] p-4 pt-5 shadow-[0_3px_8px_rgba(0,0,0,0.4)] active:cursor-grabbing"
    >
      {/* pino no topo */}
      <span className="absolute left-1/2 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#8B2E2E] shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />

      <div className="flex items-start justify-between gap-2">
        <p className="font-[family-name:var(--font-body)] text-[15px] leading-snug text-[#2B2113]">
          {task.title}
        </p>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            onRemove(task.id);
          }}
          className="shrink-0 font-[family-name:var(--font-display)] text-xs text-[#2B2113]/30 opacity-0 transition hover:text-[#8B2E2E] group-hover:opacity-100"
          aria-label="Remover tarefa"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
