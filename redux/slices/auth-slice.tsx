import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Initialstate = {
  value: AuthState;
};
type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
};

const initialstate = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
  } as AuthState,
} as Initialstate;

export const auth = {
  name: "auth",
  initialstate,
};
