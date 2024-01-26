import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLoggedInUser, signOutAsync } from "../AuthSlice";

const Logout = () => {
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(signOutAsync());
  });
  return <>{!user && <Navigate to="/login" replace={true}></Navigate>}</>;
};

export default Logout;
