import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdClose, IoMdStar } from "react-icons/io";
import { CiBellOn, CiCalendar } from "react-icons/ci";
import { VscArrowSwap } from "react-icons/vsc";
import { LuPlus } from "react-icons/lu";
import Checkbox from "@mui/material/Checkbox";
import { green } from "@mui/material/colors";
import { useState } from "react";
import { deleteTask, toggleTaskCompleted, toggleTaskImportent } from "../store/action";
import { useDispatch } from "react-redux";
import { FaRegStar } from "react-icons/fa";

function RightSideBar({todoData, isOpened, setIsOpened}) {
 
  const [date, setDate] = useState(new Date());
  const [calander, setCalander] = useState(false);

  
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const dispatch = useDispatch();

  // @ts-ignore
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  console.log("first", todoData)
  
  return (
    isOpened && (
      <div className="w-2/3 z-40 bg-[#EEF6EF] flex flex-col justify-between max-sm:h-full max-sm:absolute max-sm:w-full max-sm:bg-white max-h-[94vh] dark:bg-[#2C2C2C] dark:text-white">
        <div className="w-full pl-8 max-sm:pl-0 max-sm:p-2">
          

        <div className=" px-4 py-8 w-full h-20 max-sm:h-10 max-sm:px-2 max-sm:py-4 border-t-2 border-t-[#496E4B33] flex items-center justify-between dark:text-white">
      <div className="flex justify-between items-center gap-5">
        <Checkbox
          {...label}
          onClick={() => {
            dispatch(toggleTaskCompleted(todoData.id));
          }}
          checked={todoData?.completed}
          sx={{
            color: green[800],
            "&.Mui-checked": {
              color: green[600],
              fontSize: 20,
            },
          }}
        />

        <button className="font-normal text-xl text-[#1B281B] dark:text-white">
          {todoData?.name}
        </button>
      </div>
      {todoData?.important ? (
        <IoMdStar
          onClick={() => {
            dispatch(toggleTaskImportent(todoData?.id));
          }}
          className="h-8 w-8 font-extrabold"
        />
      ) : (
        <FaRegStar
          onClick={() => {
            dispatch(toggleTaskImportent(todoData?.id));
          }}
          className="h-6 w-6 font-extrabold"
        />
      )}
    </div>


          <div className="border-t-2 border-t-[#496E4B33] max-sm:px-4 max-sm:py-4 flex gap-8 py-4 px-6">
            <span className="text-2xl">
              <LuPlus />
            </span>
            <h1 className="text-[15px] font-semibold">Add Step</h1>
          </div>

          <div className="border-t-2 border-t-[#496E4B33] max-sm:px-4 max-sm:py-4 flex gap-8 py-4 px-6">
            <span className="text-2xl">
              <CiBellOn />
            </span>
            <h1 className="text-[15px] font-semibold">Set Reminder</h1>
          </div>

          <div className="border-t-2 border-t-[#496E4B33] max-sm:px-4 max-sm:py-4 flex gap-8 py-4 px-6">
            <div className="flex gap-8 " onClick={() => setCalander(!calander)}>
              <span className="text-2xl">
                <CiCalendar 
                />
              </span>
              <h1 className="text-[15px] font-semibold">Add Due Date</h1>
            </div>
            <div
              className={`mt-4 ${
                calander ? "" : "hidden"
              } flex items-center justify-center`}
            >
            </div>
          </div>

          <div className="border-t-2 border-t-[#496E4B33] max-sm:px-4 max-sm:py-4 flex gap-8 py-4 px-6">
            <span className="text-2xl">
              <VscArrowSwap />
            </span>
            <h1 className="text-[15px] font-semibold">Repeat</h1>
          </div>

          <div className="border-t-2 border-t-[#496E4B33] max-sm:px-4 max-sm:py-4 flex gap-8 py-4 px-6">
            <input
              type="text"
              placeholder="Add Notes"
              className="outline-none px-10 w-full bg-inherit max-sm:px-5"
            />
          </div>
        </div>

        <div className="flex justify-between items-center border-t-2 border-[#35793799] h-20 w-full px-2 max-sm:px-6">
          <IoMdClose className="text-2xl" onClick={()=> setIsOpened(false)} />
          <h1>Created Today</h1>
          <RiDeleteBin6Fill className="text-2xl" onClick={()=>{
            dispatch(deleteTask(todoData?.id))
            setIsOpened(false)
          }} />
        </div>
      </div>
    )
  );
}

export default RightSideBar;
