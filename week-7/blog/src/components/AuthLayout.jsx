import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Protected = ({ children, authentication = true }) => {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    const checkAuthentication = async () => {
      if (authentication && !authStatus) {
        navigate("/login");
      } else if (!authentication && authStatus) {
        navigate("/");
      }
      setLoader(false);
    };

    checkAuthentication();
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
};
