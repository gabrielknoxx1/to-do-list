import { useTaskListStore } from "../stores/useTaskListStore";

export const baseUrl = "http://localhost:3000";

export const useApi = () => {
  const [updateList] = useTaskListStore(({ updateList }) => [updateList]);

  const getTasks = () => {
    fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => updateList(data));
  };

  return {
    getTasks,
  };
};
