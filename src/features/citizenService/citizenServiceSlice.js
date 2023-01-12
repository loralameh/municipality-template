import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCitizenServicesThunk,
  getCitizenServiceThunk,
  getUserCitizenServicesThunk,
  deleteServiceThunk,
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
  UserCitizenServices: [],
};

export const getCitizenServices = createAsyncThunk(
  "CitizenServices/getAllCitizenServices",
  async (categoryId, thunkAPI) => {
    return getCitizenServicesThunk(`/citizen-service/all?category=${categoryId}`, thunkAPI);
  }
);

export const getUserCitizenServices = createAsyncThunk(
  "CitizenServices/getUserCitizenServices",
  async (thunkAPI) => {
    console.log("getUserCitizenServices called");
    return getUserCitizenServicesThunk(`/citizen-service`, thunkAPI);
  }
);

export const getCitizenService = createAsyncThunk(
  "CitizenServices/getSinglecitizenService",
  async (serviceId, thunkAPI) => {
    return getCitizenServiceThunk(`/citizen-service/${serviceId}`, thunkAPI);
  }
);
export const deleteService = createAsyncThunk(
  "CitizenServices/deleteService",
  async (serviceId, thunkAPI) => {
    return deleteServiceThunk(`/citizen-service/${serviceId}`, thunkAPI);
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

    [getUserCitizenServices.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserCitizenServices.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.UserCitizenServices = payload;
    },
    [getUserCitizenServices.rejected]: (state, { payload }) => {
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

    [deleteService.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteService.fulfilled]: (state, { payload }) => {
      state.UserCitizenServices = [];
      state.isLoading = false;
      state.snackBarSettings = {
        open: true,
        type: "success",
        message: `تم الحذف`,
      };
    },
    [deleteService.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.snackBarSettings = {
        open: true,
        type: "error",
        message: `${payload} `,
      };
    },
  },
});

// export const {  } = citizenServicesSlice.actions;
export default citizenServicesSlice.reducer;
