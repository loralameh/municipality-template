import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";

export const getAllServiceCategoriesThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    console.log(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
export const getServiceCategoryThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    console.log(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
