import { createSlice } from '@reduxjs/toolkit'
const initialState = []
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.some((prod) => prod.item.id === payload.item.id)
        ? state.map((elem) => {
            if (elem.item.id === payload.item.id) {
              return elem.quantity++
            }
            return elem
          })
        : state.push(payload)
    },
    clearCart: () => initialState,
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
