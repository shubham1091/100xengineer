import { useDispatch } from "react-redux";
import { authService } from "../appwrite/auth";
import { logOut } from "../store/authSlice";

export const LogOutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      await authService.logout();
      dispatch(logOut());
    } catch (error) {
      console.error("Logout error:", error.message);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};
