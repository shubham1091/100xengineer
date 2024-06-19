import { UserContext } from "./context/UserContext";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { UserContextProvider } from "./context/UserContextProvider";

function CTX() {
  return (
    <UserContextProvider>
      <h1>Hello world</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default CTX;
