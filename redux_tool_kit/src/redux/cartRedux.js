import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: [],
    },
    reducers: {
      addItem: (state, action) => {
        state.items.push(action.payload);
      },
      // You can add more actions like removeItem, updateQuantity, etc.
    },
  });
  