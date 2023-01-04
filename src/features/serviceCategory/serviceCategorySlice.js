import { Source } from "@mui/icons-material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getServiceCategoryThunk } from "features/serviceCategory/serviceCategoryThunk";

const initialState = {
  isLoading: false,
  snackBarSettings: {
    open: false,
    type: "",
    message: "",
  },
  categories: [],
};

export const getServiceCategory = createAsyncThunk(
  "serviceCategory/getServiceCategory",
  async (source, thunkAPI) => {
    return getServiceCategoryThunk(`/service-category?source=${source}`, thunkAPI);
  }
);

const serviceCategorySlice = createSlice({
  name: "serviceCategory",
  initialState,
  reducers: {},
  extraReducers: {
    [getServiceCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [getServiceCategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.snackBarSettings = {
        open: true,
        type: "success",
        message: `تم الإرسال`,
      };
      state.categories = payload;
    },
    [getServiceCategory.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.snackBarSettings = {
        open: false,
        type: "",
        message: "",
      };
    },
  },
});

// export const {  } = serviceCategorySlice.actions;
export default serviceCategorySlice.reducer;
