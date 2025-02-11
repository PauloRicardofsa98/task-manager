import SideBar from "./components/Sidebar";
import Tasks from "./components/Tasks";
import { Toaster } from "sonner";

const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <Tasks />
      <Toaster
        toastOptions={{
          style: {
            color: "#35383E",
          },
        }}
      />
    </div>
  );
};

export default App;
