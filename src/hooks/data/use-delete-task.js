import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTask = (taskId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteTask", taskId],
    mutationFn: async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Erro ao deletar tarefa");
      }
      const deletedTask = response.json();

      return deletedTask;
    },
    onSuccess: (deletedTask) => {
      queryClient.setQueryData("tasks", (oldTasks) =>
        oldTasks.filter((old) => old.id !== deletedTask.id),
      );
    },
  });
};
