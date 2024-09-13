import { FaRegStar } from "react-icons/fa";

import Checkbox from "@mui/material/Checkbox";
import { green } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { toggleTaskCompleted, toggleTaskImportent } from "../store/action";
import { IoMdStar } from "react-icons/io";

function TodosCard({ data ,setSideBar }) {

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const dispatch = useDispatch();



  return (
    <div className=" px-4 py-8 w-full h-20 max-sm:h-10 max-sm:py-5 border-t-2 border-t-[#496E4B33] flex items-center justify-between dark:text-white">
      <div className="flex h-full w-full justif items-center gap-5 max-sm:gap-3">
        <Checkbox
          {...label}
          onClick={() => {
            dispatch(toggleTaskCompleted(data.id));
          }}
          checked={data?.completed}
          sx={{
            color: green[800],
            "&.Mui-checked": {
              color: green[600],
              fontSize: 20,
            },
          }}
        />

        <button onClick={()=>(setSideBar((pre)=>!pre))} className="font-normal text-xl text-[#1B281B] dark:text-white">
          <h1 className={` ${data?.completed&&"line-through"}`}>{data?.name}</h1>
        </button>

      </div>
      {data?.important ? (
        <IoMdStar
          onClick={() => {
            dispatch(toggleTaskImportent(data?.id));
          }}
          className="h-8 w-8 font-extrabold"
        />
      ) : (
        <FaRegStar
          onClick={() => {
            dispatch(toggleTaskImportent(data?.id));
          }}
          className="h-6 w-6 font-extrabold"
        />
      )}
    </div>
  );
}

export default TodosCard;
