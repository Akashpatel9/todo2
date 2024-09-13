import { useSelector } from "react-redux";
import Main from "./components/Main";
import NevBar from "./components/NevBar";
import RightSideBar from "./components/RightSideBar";
import SideBar from "./components/SideBar";
import Signin from "./_auth/Signin";
import { useState } from "react";

function App() {
  // @ts-ignore
  const { isAuthenticated } = useSelector((state) => state?.auth);

  const [todoData, setTodoData] = useState({});
  const [isOpened, setIsOpened] = useState(false);

  const [allTask, setAllTask] = useState(true);
  const [importantTask, setImportantTask] = useState(false);
  const [todayTask, setTudayTask] = useState(false);

  const [sideBar, setSideBar] = useState(false);

  if (!isAuthenticated) {
    return <Signin />;
  }

  return (
    <>
      <main className="h-screen w-full px-12 max-sm:px-4 max-md:px-6 md:px-6 dark:bg-[#242424]">
        <NevBar setSideBar={setSideBar} />
        <div className="flex w-full gap-12 max-h-[94vh]">
          <SideBar
            sideBar={sideBar}
            setAllTask={setAllTask}
            setImportantTask={setImportantTask}
            setTudayTask={setTudayTask}
          />
          <Main
            allTask={allTask}
            todayTask={todayTask}
            importantTask={importantTask}
            setTodoData={setTodoData}
            setSideBar={setIsOpened}
          />
          <RightSideBar
            todoData={todoData}
            isOpened={isOpened}
            setIsOpened={setIsOpened}
          />
        </div>
      </main>
    </>
  );
}

export default App;
