import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";

export const createContactUsMessageThunk = async (url, values, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, values);
    return resp.data;
  } catch (error) {
    console.log(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
