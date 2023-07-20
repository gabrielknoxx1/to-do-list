import { create } from "zustand";
import { baseUrl } from "../api";

export type TaskListProps = {
  id: string;
  title: string;
  description: string;
  status: "pending" | "done";
};

export interface ITaskList {
  tasklist: TaskListProps[];
  selectedTask: TaskListProps;
  deleteTask: (taskId: string) => void;
  completeTask: (taskId: string) => void;
  addTask: (task: TaskListProps) => void;
  updateTask: (task: TaskListProps) => void;
  selectTask: (task: TaskListProps) => void;
  updateList: (task: TaskListProps[]) => void;
}

export const useTaskListStore = create<ITaskList>((set, get) => ({
  tasklist: [],
  selectedTask: {} as TaskListProps,
  addTask: (task: TaskListProps) => {
    set((state) => ({ tasklist: [...state.tasklist, task] }));
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
  },
  deleteTask: (taskId) => {
    set((state) => ({
      tasklist: state.tasklist.filter((item) => item.id !== taskId),
    }));

    fetch(`${baseUrl}/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  completeTask: (taskId) => {
    set((state) => ({
      tasklist: state.tasklist.map((item) =>
        item.id === taskId
          ? {
              ...item,
              status: item.status === "pending" ? "done" : "pending",
            }
          : item
      ),
    }));

    const doneTask = get().tasklist.reduce((value) => value);

    fetch(`${baseUrl}/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doneTask),
    });
  },
  updateTask: (task) => {
    set((state) => ({
      tasklist: state.tasklist.map((item) =>
        item.id === task.id ? task : item
      ),
    }));

    fetch(`${baseUrl}/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
  },
  selectTask: (task) =>
    set(() => ({
      selectedTask: task,
    })),
  updateList: (list: TaskListProps[]) => set(() => ({ tasklist: list })),
}));
