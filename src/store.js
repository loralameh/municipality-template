import { configureStore } from "@reduxjs/toolkit";
import userSlice from "features/user/userSlice";
import snackBarSlice from "features/snackBar/snackBarSlice";
import ContactUsSlice from "features/contact-us/ContactUsSlice";
import serviceCategorySlice from "features/serviceCategory/serviceCategorySlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    snackBar: snackBarSlice,
    contactUs: ContactUsSlice,
    serviceCategory: serviceCategorySlice,
  },
});
