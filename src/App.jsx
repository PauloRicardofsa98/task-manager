import SideBar from "./components/Sidebar";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <Tasks />
    </div>
  );
};

export default App;
