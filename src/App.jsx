import { Toaster } from "sonner";

import SideBar from "./components/Sidebar";
import Tasks from "./components/Tasks";

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
