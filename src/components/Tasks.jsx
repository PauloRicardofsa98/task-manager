import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import TasksSeparator from "./TasksSeparator";
import { useState } from "react";
import { TASKS } from "../constants/tasks";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const [tasks] = useState(TASKS);

  const morningTasks = tasks.filter((task) => task.time === "morning");
  const afternoonTasks = tasks.filter((task) => task.time === "afternoon");
  const eveningTasks = tasks.filter((task) => task.time === "evening");

  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant={"ghost"}>
            Limpar Tarefas <TrashIcon />
          </Button>
          <Button>
            Nova Tarefa <AddIcon />
          </Button>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator icon={<SunIcon />} text="Manhã" />
          {morningTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
        <div className="my-6 space-y-3">
          <TasksSeparator icon={<CloudSunIcon />} text="Tarde" />
          {afternoonTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
        <div className="space-y-3">
          <TasksSeparator icon={<MoonIcon />} text="Noite" />
          {eveningTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
