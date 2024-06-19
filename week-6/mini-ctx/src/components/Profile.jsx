import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Plese login</div>;

  return <div>Welocme {user.username}</div>;
}

export default Profile;
