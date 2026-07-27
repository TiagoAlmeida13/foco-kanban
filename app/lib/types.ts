export type ColumnId = "todo" | "doing" | "done";

export type Task = {
  id: string;
  title: string;
  color: string;
  columnId: ColumnId;
};

export const COLUMNS: { id: ColumnId; label: string }[] = [
  { id: "todo", label: "A Fazer" },
  { id: "doing", label: "Em Progresso" },
  { id: "done", label: "Concluído" },
];

export const TAG_COLORS = [
  "#5B5FEF",
  "#EF5B5B",
  "#5BEF8E",
  "#EFC15B",
  "#B95BEF",
];
