import axios from "axios";

// POST API
export const postApi = async ({ url, credentials = {} }) => {
  try {
    const response = await axios.post(url, credentials);

    return response;
  } catch (error) {}
};

// GET API
export const getApi = async ({ url }) => {
  try {
    const response = await axios.get(url, {});
    if (response.status === 200) return response.data;
  } catch (error) {}
};
