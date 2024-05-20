
import { AxiosError } from 'axios';
import axiosInstance from '..';

const MyImage = async (userId) => {
  try {
    const response = await axiosInstance.get(`/MyImage/${userId}`);

    return response.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default MyImage;
