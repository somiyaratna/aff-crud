import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.unshift(action.payload);
    },
    editProduct: (state, action) => {
      const index = state.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteProduct: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
    // Add products from the API call
    addAllProducts: (state, action) => {
      return action.payload;
    },
  },
});

export default productSlice.reducer;

export const { addProduct, addAllProducts, editProduct, deleteProduct } =
  productSlice.actions;
