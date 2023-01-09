import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllServiceCategoriesThunk,
  getServiceCategoryThunk,
} from "features/serviceCategory/serviceCategoryThunk";

const initialState = {
  isLoading: false,
  categories: [],
  category: undefined,
};

export const getAllServiceCategories = createAsyncThunk(
  "serviceCategory/getAllServiceCategories",
  async (source, thunkAPI) => {
    if (source) return getAllServiceCategoriesThunk(`/service-category?source=${source}`, thunkAPI);
    return getAllServiceCategoriesThunk(`/service-category`, thunkAPI);
  }
);
export const getServiceCategory = createAsyncThunk(
  "serviceCategory/getServiceCategory",
  async (categoryId, thunkAPI) => {
    return getServiceCategoryThunk(`/service-category/${categoryId}`, thunkAPI);
  }
);

const serviceCategorySlice = createSlice({
  name: "serviceCategory",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllServiceCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllServiceCategories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload;
    },
    [getAllServiceCategories.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },

    [getServiceCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [getServiceCategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.category = payload;
    },
    [getServiceCategory.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

// export const {  } = serviceCategorySlice.actions;
export default serviceCategorySlice.reducer;
