"use client";

import React from "react";
import { useState } from "react";

function Login() {
  const [username, setUsername] = "";
  const onClickLogIn = () => {};
  const onClickToggle = () => {};
  const onClickLogOut = () => {};

  return (
    <div className="flex justify-center items-center w-full min-h-[300px] bg-slate-600">
      <div className="w-[50%] min-h-[200px] bg-green-600 flex justify-center items-center">
        <div className="">
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
          <br />
          <button>Log in</button>
          <br />

          <button>Log Out</button>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Login;
