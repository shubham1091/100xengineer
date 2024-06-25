import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authService } from "./appwrite/auth";
import { login, logOut } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(logOut());
        } else {
          dispatch(login({ userData }));
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="flex flex-col min-h-screen bg-gray-400">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div>loading...</div>
  );
}

export default App;
