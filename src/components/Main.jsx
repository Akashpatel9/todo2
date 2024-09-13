import { IoMdArrowDropdown } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { VscArrowSwap } from "react-icons/vsc";
import { CiCalendar } from "react-icons/ci";
import TodosCard from "./TodosCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/action";


function Main({ setTodoData, setSideBar, allTask, importantTask, todayTask }) {
  // @ts-ignore
  const [grid, setGrid] = useState(false);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const [isloading, setIsLoading] = useState(false);

  const [tasks, setTasks] = useState([]);
// @ts-ignore
  const data = useSelector((state) => state?.task?.tasks);

  useEffect(() => {
    if (allTask) {
      setIsLoading(true);
      setTasks(data);
      setIsLoading(false);
    } else if (importantTask) {
      setIsLoading(true);
      let d = data.map((e) => {
        if (e.important) {
          return e;
        }
      });
      setTasks(d);
      setIsLoading(false);
    } else if (todayTask) {
      setIsLoading(true);
      let d = data.map((e) => {
        if (new Date(e?.date).getDate() === new Date(Date.now()).getDate()) {
          return e;
        }
      });
      setTasks(d);
      setIsLoading(false);
    }
  }, [allTask, importantTask, todayTask, data]);

  return (
    <div className="w-full max-h-[94vh] max-sm:w-full overflow-auto scrollbar-hide ">
      <div className="flex  items-center font-semibold text-[#142E159E]">
        <h1 className=" dark:text-zinc-400">To Do</h1> <IoMdArrowDropdown />
      </div>

      <div className=" border-y-2 borser-[#496E4B33] bg-gradient-to-t gap-10 from-[rgba(53,121,55,0.1)] to-[rgba(208,255,210,0.1)] w-full px-5 max-sm:py-5 py-10 flex flex-col justify-between">
        <input
          className="outline-none bg-inherit w-full h-auto"
          type="text"
          placeholder="Add A Task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <CiBellOn />
            <VscArrowSwap />
            <CiCalendar />
          </div>
          <button
            onClick={() => {
              if (task !== "") {
                dispatch(addTask(task));
                setTask("");
              } else {
                alert("fill text field");
              }
            }}
            className="bg-[#35793729] px-2 py-4 lg:py-2 max-md:py-2 max-sm:text[10px] max-sm:py-2 rounded-lg font-semibold text-[15px] text-[#357937]"
          >
            ADD TASK
          </button>
        </div>
      </div>

      <div>
        <div className="w-full">
          <div
            className={`w-full h-full flex ${
              grid ? "flex-wrap mt-10" : "flex-col"
            } gap-10`}
          >
            {/* tasks */}
            {!isloading &&
              tasks.map((item) => {// @ts-ignore
                if (item?.completed === false) {
                  return (
                    <div
                      onClick={() => {
                        setTodoData(item);
                      }}
                      key={item?.id}
                    >
                      {" "}
                      <TodosCard data={item} setSideBar={setSideBar} />
                    </div>
                  );
                }
              })}
          </div>

          <div className="py-10">
            <h1 className="font-normal text-xl text-[#1B281B] dark:text-white">
              Completed
            </h1>
          </div>

          <div>
            {!isloading &&
              tasks.map((item) => {// @ts-ignore
                if (item?.completed === true) {
                  return (
                    <div
                      onClick={() => {
                        setTodoData(item);
                      }}
                      key={item?.id}
                    >
                      {" "}
                      <TodosCard data={item} setSideBar={setSideBar} />
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
