import React from "react";
import { useStore } from "../../store";

const PrivateRoute = ({ children }) => {
  const { userState } = useStore();
  const { isUserLogin } = userState;
  return <div></div>;
};

export default PrivateRoute;
