import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCitizenServicesThunk,
  getCitizenServiceThunk,
} from "features/citizenService/citizenServiceThunk";

const initialState = {
  isLoading: false,
  snackBarSettings: {
    open: false,
    type: "",
    message: "",
  },
  citizenServices: [],
  citizenService: undefined,
};

export const getCitizenServices = createAsyncThunk(
  "CitizenServices/getAllCitizenServices",
  async (categoryId, thunkAPI) => {
    return getCitizenServicesThunk(`/citizen-service/all?category=${categoryId}`, thunkAPI);
  }
);

export const getCitizenService = createAsyncThunk(
  "CitizenServices/getSinglecitizenService",
  async (serviceId, thunkAPI) => {
    return getCitizenServiceThunk(`/citizen-service/${serviceId}`, thunkAPI);
  }
);

const citizenServicesSlice = createSlice({
  name: "citizenServices",
  initialState,
  reducers: {},
  extraReducers: {
    [getCitizenServices.pending]: (state) => {
      state.isLoading = true;
    },
    [getCitizenServices.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.citizenServices = payload;
    },
    [getCitizenServices.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },

    [getCitizenService.pending]: (state) => {
      state.isLoading = true;
    },
    [getCitizenService.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.citizenService = payload;
    },
    [getCitizenService.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

// export const {  } = citizenServicesSlice.actions;
export default citizenServicesSlice.reducer;
