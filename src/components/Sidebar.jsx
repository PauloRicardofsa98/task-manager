import { HomeIcon, TasksIcon } from "../assets/icons";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <div className="h-screen w-16 bg-white lg:w-72 lg:min-w-72">
      <div className="text- hidden space-y-4 px-8 py-6 lg:block">
        <h1 className="text-xl font-semibold text-brand-primary">
          Task Manager
        </h1>
        <p>
          Um simples{" "}
          <span className="text-brand-primary">organizador de tarefas</span>.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-2 p-2 lg:mt-0">
        <SidebarButton to="/">
          <HomeIcon />
          <span className="hidden lg:flex">Início</span>
        </SidebarButton>
        <SidebarButton to="/tasks">
          <TasksIcon />
          <span className="hidden lg:flex"> Minhas Tarefas</span>
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
