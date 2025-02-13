import { useQuery } from "@tanstack/react-query";

export const useGetTasks = () =>
  useQuery({
    queryKey: "tasks",
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "GET",
      });

      return await response.json();
    },
  });
