import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

type ProductState = {
  items: Product[];
  loading: boolean;
  totalPrice: number;
  cartCounter: number;
  discount: number;
  isTrue: boolean
};

type InitialState = {
  value: ProductState;
};

const initialState: InitialState = {
  value: {
    items: [
      { id: 1, name: "Teriyaki", price: 20, qty: 0 },
      { id: 2, name: "Fried Chicken", price: 30, qty: 0 },
      { id: 3, name: "Hotdog", price: 40, qty: 0 },
    ],
    loading: false,
    totalPrice: 0,
    cartCounter: 0,
    discount: 0.20,
    isTrue : false
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      const newProduct = { ...action.payload, orderNo: state.value.items.length + 1 };
      state.value.items.push(newProduct);
      state.value.totalPrice += newProduct.price;
    },
    removeProduct(state, action: PayloadAction<number>) {
      const productToRemove = state.value.items.find((product) => product.id === action.payload);
      if (productToRemove) {
        state.value.items = state.value.items.filter((product) => product.id !== action.payload);
        state.value.totalPrice -= productToRemove.price;
      }
    },
    cartCounter(state, action: PayloadAction<number>) {
      state.value.cartCounter += action.payload;
      
    },
    cartRemover(state, action: PayloadAction<number>) {
      const productToRemove = state.value.items.find((product) => product.id === action.payload);
      if (productToRemove) {
        state.value.cartCounter -= 1;
        state.value.totalPrice -= productToRemove.price;
      }
    },
    addQuan(state, action: PayloadAction<number>) {
      const addQuan = state.value.items.find((product) => product.id === action.payload);
      
      
      if (addQuan) {
        addQuan.qty += 1;
    
      }
    },

    reduceQuan(state, action: PayloadAction<number>) {
      const lessQuan = state.value.items.find((product) => product.id === action.payload);
      
      
      if (lessQuan) {
        lessQuan.qty -= 1;
       state.value.totalPrice -= lessQuan.price;
       state.value.cartCounter -= 1;
    
      }
    },

    discount(state) {
      const discountP = state.value.totalPrice * state.value.discount
      
      state.value.totalPrice = state.value.totalPrice -discountP

      state.value.isTrue = true

    },
  },
});

export const { addProduct, removeProduct, cartCounter, cartRemover, addQuan, reduceQuan, discount } =
  productsSlice.actions;
export default productsSlice.reducer;
