import { useQuery } from "@tanstack/react-query";

import { api } from "../../lib/axios";

export const useGetTask = ({ taskId, onSuccess }) =>
  useQuery({
    queryKey: ["task", taskId],
    queryFn: async () => {
      const { data: task } = await api.get(`/tasks/${taskId}`);

      onSuccess(task);

      return task;
    },
  });
