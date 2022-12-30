import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";

export const getServiceCategoryThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    console.log(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
