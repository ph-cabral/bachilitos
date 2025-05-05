// src/features/tasks/store.ts
import { create } from "zustand";

type TaskStore = {
  filter: string;
  setFilter: (filter: string) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  filter: "",
  setFilter: (filter) => set({ filter }),
}));
