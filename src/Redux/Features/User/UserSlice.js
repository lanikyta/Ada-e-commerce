import { createSlice } from '@reduxjs/toolkit'
const initialState = []
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {},
  },
})

// Action creators are generated for each case reducer function
export const { logIn } = userSlice.actions

export default userSlice.reducer
