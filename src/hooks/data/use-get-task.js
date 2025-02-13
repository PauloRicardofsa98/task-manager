import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetTask = ({ taskId, onSuccess }) =>
  useQuery({
    queryKey: ["task", taskId],
    queryFn: async () => {
      const { data: task } = await axios.get(
        `http://localhost:3000/tasks/${taskId}`,
      );

      onSuccess(task);

      return task;
    },
  });
