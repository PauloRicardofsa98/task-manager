import { useMutation, useQueryClient } from "@tanstack/react-query";

import { taskQueryKeys } from "../../keys/queries";
import { api } from "../../lib/axios";

export const useUpdateTask = (taskId) => {
  const queryClient = useQueryClient();
  return useMutation({
    queryKey: taskQueryKeys.updateTask(taskId),
    mutationFn: async ({ title, description, time }) => {
      const { data: updatedTask } = await api.patch(`/tasks/${taskId}`, {
        title: title.trim(),
        description: description.trim(),
        time,
      });

      return updatedTask;
    },
    onSuccess: (updatedTask) => {
      queryClient.setQueryData(taskQueryKeys.getAll(), (oldTasks) =>
        oldTasks.map((old) => (old.id === taskId ? updatedTask : old)),
      );
    },
  });
};
