import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementAsync } from "./orderSlice.js";

export default function Order() {
  const dispatch = useDispatch();

  return (
    <div>
      <div></div>
    </div>
  );
}
