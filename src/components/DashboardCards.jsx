import { LoaderIcon, Tasks2Icon, TasksIcon } from "../assets/icons";
import { useGetTasks } from "../hooks/data/use-get-tasks";
import DashboardCard from "./DashboardCard";

const DashboardCards = () => {
  const { data: tasks } = useGetTasks();

  const notStartedTasks = tasks?.filter(
    (task) => task.status === "not_started",
  ).length;
  const doneTasks = tasks?.filter((task) => task.status === "done").length;
  const inProgressTasks = tasks?.filter(
    (task) => task.status === "in_progress",
  ).length;
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-9">
      <DashboardCard
        icon={<Tasks2Icon />}
        mainText={tasks?.length}
        secondaryText="Tarefas totais"
      />
      <DashboardCard
        icon={<Tasks2Icon />}
        mainText={notStartedTasks}
        secondaryText="Tarefas não iniciadas"
      />
      <DashboardCard
        icon={<LoaderIcon />}
        mainText={inProgressTasks}
        secondaryText="Tarefas em andamento"
      />
      <DashboardCard
        icon={<TasksIcon />}
        mainText={doneTasks}
        secondaryText="Tarefas concluídas"
      />
    </div>
  );
};

export default DashboardCards;
