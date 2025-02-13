import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useUpdateTask = (taskId) => {
  const queryClient = useQueryClient();
  return useMutation({
    queryKey: ["updateTask", taskId],
    mutationFn: async ({ title, description, time }) => {
      const { data: updatedTask } = await axios.patch(
        `http://localhost:3000/tasks/${taskId}`,
        { title: title.trim(), description: description.trim(), time },
      );

      return updatedTask;
    },
    onSuccess: (updatedTask) => {
      queryClient.setQueryData("tasks", (oldTasks) =>
        oldTasks.map((old) => (old.id === taskId ? updatedTask : old)),
      );
    },
  });
};
