import { useQuery } from "@tanstack/react-query";

import { taskQueryKeys } from "../../keys/queries";
import { api } from "../../lib/axios";

export const useGetTask = ({ taskId, onSuccess }) =>
  useQuery({
    queryKey: taskQueryKeys.getOne(taskId),
    queryFn: async () => {
      const { data: task } = await api.get(`/tasks/${taskId}`);

      onSuccess(task);

      return task;
    },
  });
