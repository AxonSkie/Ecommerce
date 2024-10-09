"use client";

import { useAppSelector } from "@/redux/store";
import HomeCart from "./HomeCart";
export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username);
  return (
    <div className="flex items-center min-h-[100vh] flex-col">
      <HomeCart />

      <h1>{username}</h1>
    </div>
  );
}
