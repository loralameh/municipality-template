import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMunicipalityServicesThunk,
  getMunicipalityServiceThunk,
} from "features/municipalityService/municipalityServiceThunk";

const initialState = {
  isLoading: false,
  snackBarSettings: {
    open: false,
    type: "",
    message: "",
  },
  municipalityServices: [],
  municipalityService: undefined,
};

export const getMunicipalityServices = createAsyncThunk(
  "municipaltyServices/getAllMunicipalityServices",
  async (categoryId, thunkAPI) => {
    return getMunicipalityServicesThunk(`/municipality-service?category=${categoryId}`, thunkAPI);
  }
);

export const getMunicipalityService = createAsyncThunk(
  "municipaltyServices/getSingleMunicipalityService",
  async (serviceId, thunkAPI) => {
    return getMunicipalityServiceThunk(`/municipality-service/${serviceId}`, thunkAPI);
  }
);

const municipalityServicesSlice = createSlice({
  name: "municipalityServices",
  initialState,
  reducers: {},
  extraReducers: {
    [getMunicipalityServices.pending]: (state) => {
      state.isLoading = true;
    },
    [getMunicipalityServices.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.municipalityServices = payload;
    },
    [getMunicipalityServices.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },

    [getMunicipalityService.pending]: (state) => {
      state.isLoading = true;
    },
    [getMunicipalityService.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.municipalityService = payload;
    },
    [getMunicipalityService.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

// export const {  } = municipalityServicesSlice.actions;
export default municipalityServicesSlice.reducer;
