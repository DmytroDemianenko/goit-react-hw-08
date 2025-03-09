import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
export const selectNameFilter = (state) => state.filter.name;
export default filterSlice.reducer;
