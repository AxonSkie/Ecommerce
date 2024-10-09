import React from "react";
import Image from "next/image";
import dessert from "@/app/public/images/pngwing.com (6).png";
import { discount } from "@/redux/slices/cart-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { Product } from "@/redux/slices/cart-slice";
import { useState } from "react";

function SecondPage() {
  const dispatch = useDispatch<AppDispatch>();
  const isDiscounted = useAppSelector(
    (state) => state.cartReducer.value.isTrue
  );

  const discountPrice = () => {
    dispatch(discount());
    setDisable(!isDisabled);
  };

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  const [isDisabled, setDisable] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="w-full min-h-[100vh] bg-red-900 flex flex-col sm:flex-row sm:items-center">
      {isOpen && (
        <div className=" absolute w-full min-h-[100vh] flex items-center justify-center">
          <div className="bg-black absolute opacity-[0.5] w-full min-h-[100vh] z-10"></div>
          <div className="bg-white w-[70%] z-20 min-h-[400px] absolute flex flex-col">
            <div className=" w-full flex-1 flex gap-1 flex-col justify-end">
              <div className=" w-[100%] min-h-[100px] text-center ">
                {isDiscounted && (
                  <div className=" z-20 text-red-600 w-full min-h-[100px] text-[30px] mb-[10px]">
                    You Already Used ur One-time voucher
                    <div>
                      <button
                        className="text-white ml-[20px] bg-red-900 text-[25px] w-[100px] rounded-xl"
                        onClick={handleClick}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
                {!isDiscounted && (
                  <div>
                    <h1 className="text-red-600 text-[50px]">20% OFF!</h1>
                    Are you Sure you want to use this now? This is a{" "}
                    <span className="text-red-600">one-time</span> use only
                    <p>
                      Tip: Go buy all the food you want first before using this
                      one time voucher
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className=" w-full flex-1 flex flex-col mt-[20px]">
              <div className=" w-full min-h-[50px] text-white flex justify-center">
                <div>
                  {!isDiscounted && (
                    <div>
                      <button
                        className="mr-[20px] bg-red-900 w-[90px] min-h-[50px] rounded-xl"
                        onClick={() => {
                          handleClick();
                          discountPrice();
                        }}
                        disabled={isDisabled}
                      >
                        Yes!
                      </button>
                      <button
                        className=" bg-red-900 w-[90px] min-h-[50px] rounded-xl"
                        onClick={handleClick}
                      >
                        No
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex-1  flex flex-col">
        <div className="flex-1  flex justify-center items-center ">
          <div>
            <h1 className="text-[50px] text-white sm:text-[100px]">
              Longing for
            </h1>
            <span className="text-red-400 text-[50px] sm:text-[100px]">
              Desserts <span className="text-white">?</span>
            </span>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-start">
          <div>
            <button className="bg-red-500 min-w-[150px] min-h-[50px] rounded-[10px] text-white text-[20px] font-roboto">
              View Desserts
            </button>
            <button
              className="bg-red-500 min-w-[150px] min-h-[50px] rounded-[10px] text-white text-[20px] font-roboto ml-[10px]"
              onClick={handleClick}
            >
              Free Gifts!
            </button>
            <div className="text-center mt-[10px] flex justify-center ">
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1  flex justify-center items-start">
        <div>
          <Image
            src={dessert}
            className="w-[400px] sm:w-[1000px]"
            alt="random"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
