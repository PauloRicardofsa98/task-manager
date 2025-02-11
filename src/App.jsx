import SideBar from "./components/Sidebar";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <div className="flex gap-9">
      <SideBar />
      <Tasks />
    </div>
  );
};

export default App;
