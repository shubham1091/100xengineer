import { useDispatch } from "react-redux";
import { authService } from "../appwrite/auth";
import { logOut } from "../store/authSlice";

export const LogOutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      await authService.logout(); // Assuming authService.logout() handles logout logic
      dispatch(logOut()); // Dispatching logout action to update Redux state
    } catch (error) {
      console.error("Logout error:", error.message); // Logging error to console
      // Optionally, you can show an error message to the user
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
