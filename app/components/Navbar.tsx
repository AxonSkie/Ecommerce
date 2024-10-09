import React from "react";

import { useState } from "react";
import { useAppSelector } from "@/redux/store";

function Navbar() {
  const counter = useAppSelector(
    (state) => state.cartReducer.value.cartCounter
  );

  const [isOpen, setOpen] = useState(false);

  const handeClick = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="w-full min-h-[100px]  overflow-hidden flex flex-col sticky z-50">
      <div className="w-full min-h-[100px] flex bg-red-900  border-b-2 ">
        <div className="flex-1 bg-red-900 flex justify-center items-center">
          <div>
            <h1 className="text-white">Axon Ecommerce</h1>
          </div>
        </div>
        <div className="flex-1  flex justify-center items-center">
          <div>
            <button className="text-white" onClick={handeClick}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
