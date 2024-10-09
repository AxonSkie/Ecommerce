"use client";

import React from "react";
import { useState } from "react";
import { logIn, logOut } from "../redux/slices/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

function Login() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const onClickLogIn = () => {
    dispatch(logIn(username));
  };
  // const onClickToggle = () => {};
  const onClickLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="flex justify-center items-center w-full min-h-[300px] bg-slate-600">
      <div className="w-[50%] min-h-[200px] bg-green-600 flex justify-center items-center">
        <div className="">
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
          <br />
          <button onClick={onClickLogIn}>Log in</button>
          <br />

          <button onClick={onClickLogOut}>Log Out</button>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Login;
