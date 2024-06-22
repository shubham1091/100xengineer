import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authService } from "./appwrite/auth";
import { login, logOut } from "./store/authSlice";
import { Footer, Header } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then(({ userData }) => {
        if (!userData) {
          dispatch(logOut());
          return;
        }
        dispatch(login({ userData }));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>{/* outlet */}</main>
        <Footer />
      </div>
    </div>
  ) : (
    <div>loading...</div>
  );
}

export default App;