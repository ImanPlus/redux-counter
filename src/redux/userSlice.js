import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "ali",
    children: ["mary", "mamad"],
  },

  reducers: {
    addChildren: (state, actions) => {
      state.children = [...state.children, ...actions.payload];
    },
  },
});

export const { addChildren } = userSlice.actions;

export default userSlice.reducer;
