import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'basket',

  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
        //Finds the first index of the item we want to remove
        const index = state.items.findIndex((item) => item.id === action.payload.id);

        const newItems = [...state.items];

        if(index >= 0) {
            newItems.splice(index, 1);
        } else {
            console.warn(
                `Cant remove product (id: ${action.payload.id}) as it is not in the basket!`
            );
        }

        state.items = newItems;
    },
  }
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) => state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total += item.price, 0);

export default basketSlice.reducer