import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Initialstate = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
};

const initialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
  } as AuthState,
} as Initialstate;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: "wassup",
          uid: "asdwqe21312dsadasd",
        },
      };
    },
  },
});

export const { logIn, logOut } = auth.actions;

export default auth.reducer;
