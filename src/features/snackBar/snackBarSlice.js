import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  type: "success",
  message: "",
};
const snackBarSlice = createSlice({
  name: "snackBar",
  initialState,
  reducers: {
    setSnackbar: (state, { payload }) => {
      state.open = payload.open;
      state.type = payload.type;
      state.message = payload.message;
    },
  },
});

export const { setSnackbar } = snackBarSlice.actions;
export default snackBarSlice.reducer;
