import { CloudSunIcon, MoonIcon, SunIcon } from "../assets/icons";
import { useGetTasks } from "../hooks/data/use-get-tasks";
import Header from "./Header";
import TaskItem from "./TaskItem";
import TasksSeparator from "./TasksSeparator";

const Tasks = () => {
  const { data: tasks } = useGetTasks();

  const morningTasks = tasks?.filter((task) => task.time === "morning");
  const afternoonTasks = tasks?.filter((task) => task.time === "afternoon");
  const eveningTasks = tasks?.filter((task) => task.time === "evening");

  return (
    <div className="w-full space-y-6 px-2 py-16 lg:px-8">
      <Header subtitle="Minhas tarefas" title="Minhas tarefas" />
      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator icon={<SunIcon />} text="Manhã" />
          {morningTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da manhã
            </p>
          )}
          {morningTasks?.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
        <div className="my-6 space-y-3">
          <TasksSeparator icon={<CloudSunIcon />} text="Tarde" />
          {afternoonTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da tarde
            </p>
          )}
          {afternoonTasks?.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
        <div className="space-y-3">
          <TasksSeparator icon={<MoonIcon />} text="Noite" />
          {eveningTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da noite
            </p>
          )}
          {eveningTasks?.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
