import { useMutation, useQueryClient } from "@tanstack/react-query";

import { taskMutationKeys } from "../../keys/mutations";
import { taskQueryKeys } from "../../keys/queries";
import { api } from "../../lib/axios";

export const useUpdateTask = (taskId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: taskMutationKeys.update(taskId),
    mutationFn: async (task) => {
      const { data: updatedTask } = await api.patch(`/tasks/${taskId}`, {
        title: task?.title?.trim(),
        description: task?.description?.trim(),
        time: task?.time,
        status: task?.status,
      });
      console.log(updatedTask);

      return updatedTask;
    },
    onSuccess: (updatedTask) => {
      queryClient.setQueryData(taskQueryKeys.getAll(), (oldTasks) =>
        oldTasks.map((old) => (old.id === taskId ? updatedTask : old)),
      );
    },
  });
};
