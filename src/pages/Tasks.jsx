import SideBar from "../components/Sidebar";
import Tasks from "../components/Tasks";

const TasksPage = () => {
  return (
    <div className="flex">
      <SideBar />
      <Tasks />
    </div>
  );
};

export default TasksPage;
