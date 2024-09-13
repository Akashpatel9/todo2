import { useDispatch } from "react-redux";
import { login } from "../store/action";

function Signin() {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <button
        onClick={() => dispatch(login())}
        className="px-6 py-2 rounded-xl border-2 capitalize"
      >
        sign-in
      </button>
    </div>
  );
}

export default Signin;
