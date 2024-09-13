import { FaRegStar } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineAssignmentInd } from "react-icons/md";
import ProgressBar from "./ProgressBar";
import { LuPlus } from "react-icons/lu";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { useSelector } from "react-redux";

function SideBar({ sideBar, setAllTask, setImportantTask, setTudayTask }) {


  let totalToday = 0;

  const percentage = useSelector((state) => {
    // @ts-ignore
    let data = state?.task?.tasks?.filter((e) => {
      return new Date(e?.date).getDate() === new Date(Date.now()).getDate();
    });
    totalToday = data?.length;
    // @ts-ignore
    const completed = data.filter((e) => e?.completed)?.length;
    console.log(completed);
    return ((completed / data?.length) * 100);

  });

  console.log(percentage);
  

  return (
    sideBar && (
      <div className="w-1/3 md:px-0 max-md:px-0 md:w1/2 max-md:w-1/2 max-sm:z-4 z-40 bg-white  max-h-[94vh] max-sm:absolute max-sm:h-full  max-sm:w-full overflow-auto dark:text-white dark:bg-[#242424]">
        <div className="w-full flex items-center relative justify-center">
          <img
            className="rounded-full h-32 w-32 max-lg:w-28 max-lg:h-28 max-md:h-24 max-md:w-24 max-sm:h-40 max-sm:-top-0 max-sm:w-40 absolute top-0 max-md:top-5"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="dark:bg-[#2C2C2C]  max-sm:px-1  max-md:px-1 md:px-1 max-md:w-full max-lg:px-1 md:w-full py-12 max-max-md:py-10 flex flex-col items-center justify-center max-sm:w-full max-sm:mt-28 mt-20 gap-2 bg-[#EEF6EF]">
          <h1 className="font-semibold text-xl max-sm:text-3xl max-max-md:text-sm">
            Hay, ABCD
          </h1>
          <div className="w-full py-6 bg-white max-sm:p-2 dark:bg-[#232323]">
            <div
              onClick={() => {
                setAllTask(true);
                setImportantTask(false);
                setTudayTask(false);
              }}
              className="flex items-center h-10 w-full hover:text-[#357937] hover:bg-[#35793729] gap-4 max-md:gap-2 py-2 px-4 max-sm:px-2 max-sm:h-12 max-sm:w-full max-md:px-2 rounded-max-md"
            >
              <span className="text-2xl max-md:text-xl">
                <MdOutlineAssignment />
              </span>
              <h1 className="text-[15px] max-md:text-[14px] font-semibold">
                All Tasks
              </h1>
            </div>
            <div
              onClick={() => {
                setAllTask(false);
                setImportantTask(false);
                setTudayTask(true);
              }}
              className="flex items-center h-10 w-full hover:text-[#357937] hover:bg-[#35793729] max-sm:px-2 gap-4 max-md:gap-2 py-2 px-4 max-md:px-2 rounded-max-md"
            >
              <span className="text-2xl max-md:text-xl ">
                <CiCalendar />
              </span>
              <h1 className="text-[15px] max-md:text-[14px] font-semibold">
                Today
              </h1>
            </div>
            <div
              onClick={() => {
                setAllTask(false);
                setImportantTask(true);
                setTudayTask(false);
              }}
              className="flex items-center h-10 w-full hover:text-[#357937] hover:bg-[#35793729] gap-4 max-md:gap-2 py-2 px-4 max-sm:px-2 max-md:px-2 rounded-max-md"
            >
              <span className="text-2xl max-md:text-xl ">
                <FaRegStar />
              </span>
              <h1 className="text-[15px] max-md:text-[14px] font-semibold">
                Important
              </h1>
            </div>
            <div className="flex items-center h-10 w-full hover:text-[#357937] max-sm:px-2 hover:bg-[#35793729] gap-4 max-md:gap-2 py-2 px-4 max-md:px-2 rounded-max-md">
              <span className="text-2xl max-md:text-xl ">
                <HiOutlineNewspaper />
              </span>
              <h1 className="text-[15px] max-md:text-[14px] font-semibold">
                Planned
              </h1>
            </div>
            <div className="flex items-center h-10 w-full hover:text-[#357937] max-sm:px-2 hover:bg-[#35793729] gap-4 max-md:gap-2 py-2 px-4 max-md:px-2 rounded-max-md">
              <span className="text-2xl max-md:text-xl ">
                <MdOutlineAssignmentInd />
              </span>
              <h1 className="text-[15px] max-md:text-[14px] font-semibold">
                Assigned to me
              </h1>
            </div>
          </div>

          <div className="flex dark:bg-[#232323] items-center w-full bg-white py-6 max-md-py-4 max-md:py-2">
            <div className="flex items-center h-10 w-full hover:text-[#357937] hover:bg-[#35793729] gap-4 max-md:gap-2 py-2 px-4 max-sm:px-2 max-md:px-2 rounded-max-md">
              <span className="text-2xl max-md:text-xl">
                <LuPlus />
              </span>
              <h1 className="text-[15px] max-md:text-[14px] font-semibold ">
                Add list
              </h1>
            </div>
          </div>

          <div className="w-full bg-white dark:bg-[#232323]">
            <div className="border-b-[1.33px] border-[#F0F0F0] w-full py-6 max-md:py-4 px-4 max-sm:px-2 max-md:px-2 flex flex-col justify-center">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-sm capitalize">
                  today tasks
                </h2>{" "}
                <div className="h-4 w-[15.95px] rounded-full bg-[#BDBDBD] flex items-center justify-center">
                  <div className="flex flex-col gap-[1px]">
                    <div className="h-[2.66px] w-[2.66px] rounded-full bg-white"></div>
                    <div className="h-[7.09px] w-[2.66px] rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
              <h1 className="font-semibold text-xl">{totalToday}</h1>
            </div>

            <div className="flex items-center w-full justify-center">
              <ProgressBar progress={percentage} />
            </div>

            <div className="flex gap-4 items-center py-2 px-4 max-sm:px-2">
              <div className="flex items-center justify-center gap-2">
                <div className="h-[5.98px] w-[5.98px] rounded-full bg-[#3F9142]"></div>
                <h1 className="font-[400] text-sm capitalize">pending</h1>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="h-[5.98px] w-[5.98px] rounded-full bg-[#142E15]"></div>
                <h1 className="font-[400] text-sm capitalize">done</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default SideBar;
