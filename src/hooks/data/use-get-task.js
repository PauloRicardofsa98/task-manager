import { useQuery } from "@tanstack/react-query";

export const useGetTask = ({ taskId, onSuccess }) =>
  useQuery({
    queryKey: ["task", taskId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      });

      const task = await response.json();
      onSuccess(task);

      return task;
    },
  });
