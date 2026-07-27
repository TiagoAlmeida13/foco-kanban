"use client";

import { useEffect, useState } from "react";
import type { ColumnId, Task } from "./types";

const STORAGE_KEY = "foco:tasks";

export function useBoard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loaded, setLoaded] = useState(false);

 // eslint-disable-next-line react-hooks/set-state-in-effect -- carregamento único do localStorage, necessário para evitar erro de hidratação
useEffect(() => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      setTasks(JSON.parse(raw));
    } catch {
      setTasks([]);
    }
  }
  setLoaded(true);
}, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks, loaded]);

  function addTask(title: string, color: string, columnId: ColumnId) {
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, color, columnId },
    ]);
  }

  function removeTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function moveTask(id: string, columnId: ColumnId) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, columnId } : t)));
  }

  return { tasks, addTask, removeTask, moveTask, loaded };
}
