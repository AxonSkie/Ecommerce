"use client";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import {
  addProduct,
  removeProduct,
  cartCounter,
  cartRemover,
  addQuan,
  reduceQuan,
  discount,
} from "@/redux/slices/cart-slice";
import { useAppSelector } from "@/redux/store";
import { Product } from "@/redux/slices/cart-slice";
import Dropdown from "./components/Dropdown";
import Image from "next/image";
import Teriyaki from "./public/images/Teriyaki.jpeg";
import Navbar from "./components/Navbar";
import SecondPage from "./components/SecondPage";
import { H1Icon } from "@heroicons/react/16/solid";

function HomeCart() {
  const [isOpen, setOpen] = useState(false);
  const [isOpen1, setOpen1] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const products = useAppSelector((state) => state.cartReducer.value.items);
  const counter = useAppSelector(
    (state) => state.cartReducer.value.cartCounter
  );
  const totalP = useAppSelector((state) => state.cartReducer.value.totalPrice);

  const bolIden = useAppSelector((state) => state.cartReducer.value.isTrue);

  const handleAddProduct = (product: Product) => {
    dispatch(addProduct(product));
    dispatch(cartCounter(1));
    dispatch(addQuan(product.id));
    if (!isOpen1) {
      setOpen1(true);
    }
  };

  const removeProductbyList = (id: number) => {
    dispatch(reduceQuan(id));
    dispatch(cartRemover(-1));
    console.log(removeProduct(id));
  };

  const discountGift = () => {
    dispatch(discount());
  };

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const itemList = [
    { id: 1, name: "Teriyaki", price: 20, ordernum: 1 },
    { id: 2, name: "Fried Chicken", price: 30, ordernum: 2 },
    { id: 3, name: "Hotdog ", price: 40, ordernum: 3 },
  ];
  return (
    <div className="w-[100%]  min-h-[100vh]  ">
      <div className=" sticky top-0 z-50 ">
        <Navbar></Navbar>
        <div className="absolute w-[50%] min-h-[7vh]  z-50 top-0  flex justify-center right-0 mt-[40px]">
          <div>
            <button className="text-white" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              {counter}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="flex w-full  min-h-[50vh] justify-end absolute  ">
            <div className=" absolute w-full min-h-[100vh] bg-black opacity-55"></div>
            <div className="absolute w-[50%] min-h-[70vh] bg-white sm:w-[40%] ">
              <div className="ml-[20px]">
                <ul className="text-center">
                  {isOpen1 && (
                    <li className="text-red-700">
                      <li className="text-black text-[20px]">
                        ----You Ordered-----
                      </li>

                      {products[0] && (
                        <li>
                          {products[0].name} - {products[0].qty} Pcs.
                          <button
                            onClick={() => removeProductbyList(products[0].id)}
                            disabled={products[0].qty === 0}
                            className="bg-gray-200 min-w-[20px] ml-[10px] text-[20px] min-h-[20px]"
                          >
                            {" "}
                            -{" "}
                          </button>
                        </li>
                      )}

                      {products[1] && (
                        <li>
                          {products[1].name} - {products[1].qty} Pcs.
                          <button
                            onClick={() => removeProductbyList(products[1].id)}
                            disabled={products[1].qty === 0}
                          >
                            {" "}
                            -{" "}
                          </button>
                        </li>
                      )}

                      {products[2] && (
                        <li>
                          {products[2].name} - {products[2].qty} Pcs.
                          <button
                            onClick={() => removeProductbyList(products[2].id)}
                            disabled={products[2].qty === 0}
                          >
                            {" "}
                            -{" "}
                          </button>
                        </li>
                      )}
                    </li>
                  )}
                </ul>
              </div>

              <div className="mt-[30px] text-center">
                <h1 className="text-green-500">Total Price: {totalP}</h1>
                {bolIden && <h1>Discounted!: 20% Off!</h1>}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex  w-full min-h-[100vh]  justify-center flex-col">
        <div className="min-h-[300px]  flex-1 flex flex-col">
          <div className="flex-1  text-center flex flex-col justify-center">
            <div className="flex-1 flex  justify-center items-end sm:items-center">
              <h1 className="font-poppins text-[30px]">Best Seller's!</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>

            <div className="flex-1 w-full  flex justify-center flex-row">
              <div className="flex items-end gap-[20px] sm:gap-[60px] ">
                <Image
                  src={Teriyaki}
                  className="w-[100px] h-[100px] rounded-full sm:w-[200px] sm:h-[200px]"
                  alt=""
                ></Image>
                <Image
                  src={Teriyaki}
                  className="w-[100px] h-[100px] rounded-full sm:w-[200px] sm:h-[200px]"
                  alt=""
                ></Image>
                <Image
                  src={Teriyaki}
                  className="w-[100px] h-[100px] rounded-full sm:w-[200px] sm:h-[200px]"
                  alt=""
                ></Image>
              </div>
            </div>
            <div className="flex-2 flex  justify-center gap-[30px] items-end text-[20px] sm:gap-[100px] sm:text-[30px]">
              {itemList.map((newList) => (
                <div key={newList.id}>
                  <ul className="">
                    <li className="">{newList.name}</li>
                    <li>{newList.price} Pessos</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1  flex flex-row justify-center gap-[30px] mt-[30px] sm:gap-[150px] sm:mt-[30px]">
          <div className=" ">
            <div>
              <h1>
                <button
                  onClick={() => handleAddProduct(products[0])}
                  className="bg-red-900 rounded-lg p-2 text-white"
                >
                  Add to Cart
                </button>
              </h1>
            </div>
          </div>
          <div className=" ">
            <div>
              <h1>
                <button
                  onClick={() => handleAddProduct(products[1])}
                  className="bg-red-900 rounded-lg p-2 text-white"
                >
                  Add to Cart
                </button>
              </h1>
            </div>
          </div>
          <div className=" ">
            <div>
              <h1>
                <button
                  onClick={() => handleAddProduct(products[2])}
                  className="bg-red-900 rounded-lg p-2 text-white"
                >
                  Add to Cart
                </button>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SecondPage />
      </div>
    </div>
  );
}

export default HomeCart;
