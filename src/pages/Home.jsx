import {
  GlassWaterIcon,
  LoaderIcon,
  Tasks2Icon,
  TasksIcon,
} from "../assets/icons";
import DashboardCard from "../components/DashboardCard";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import { useGetTasks } from "../hooks/data/use-get-tasks";

const HomePage = () => {
  const { data: tasks } = useGetTasks();

  const doneTasks = tasks?.filter((task) => task.status === "done").length;
  const inProgressTasks = tasks?.filter(
    (task) => task.status === "in_progress",
  ).length;

  return (
    <div className="flex">
      <SideBar />
      <div className="w-full space-y-6 px-8 py-16">
        <Header subtitle="Dashboard" title="Dashboard" />
        <div className="grid grid-cols-4 gap-9">
          <DashboardCard
            icon={<Tasks2Icon />}
            mainText={tasks?.length}
            secondaryText="Tarefas disponíveis"
          />
          <DashboardCard
            icon={<TasksIcon />}
            mainText={doneTasks}
            secondaryText="Tarefas concluídas"
          />
          <DashboardCard
            icon={<LoaderIcon />}
            mainText={inProgressTasks}
            secondaryText="Tarefas em andamento"
          />
          <DashboardCard
            icon={<GlassWaterIcon />}
            mainText="5"
            secondaryText="Água"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
