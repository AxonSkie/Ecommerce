

import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/auth-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import cartReducer from './slices/cart-slice'


export const store = configureStore({
    reducer:{
        authReducer,
        cartReducer,
        
    },
});

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
