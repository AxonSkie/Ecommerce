import React from "react";
import { AppDispatch } from "@/redux/store";
import { UseDispatch } from "react-redux";
import { cartCounter, addProduct } from "@/redux/slices/cart-slice";
import { useAppSelector } from "@/redux/store";

function Dropdown() {
  const prices = useAppSelector((state) => state.cartReducer.value.totalPrice);

  return (
    <div className="w-[50%] min-h-[100vh] bg-violet-500 flex flex-col absolute">
      <div className="flex-1 bg-red-500 flex justify-center items-start">
        <div>
          <h1 className="text-[30px] text-white">{prices}</h1>
        </div>
      </div>
      <div className="flex-1 bg-red-600"></div>
    </div>
  );
}

export default Dropdown;
