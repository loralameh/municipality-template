import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMunicipalityServicesThunk } from "features/municipalityService/municipalityServiceThunk";

const initialState = {
  isLoading: false,
  snackBarSettings: {
    open: false,
    type: "",
    message: "",
  },
  municipalityServices: [],
};

export const getMunicipalityServices = createAsyncThunk(
  "municipaltyServices/getMunicipalityServices",
  async (categoryId, thunkAPI) => {
    return getMunicipalityServicesThunk(`/municipality-service?category=${categoryId}`, thunkAPI);
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
      console.log(payload);
    },
    [getMunicipalityServices.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.snackBarSettings = {
        open: false,
        type: "",
        message: "",
      };
    },
  },
});

// export const {  } = municipalityServicesSlice.actions;
export default municipalityServicesSlice.reducer;
