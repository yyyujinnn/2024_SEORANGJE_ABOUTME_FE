import { AxiosError } from 'axios';
import axiosInstance from '..';

const MyImage = async (userId) => {
  if (!userId) {
    console.error('userId가 유효하지 않습니다.');
    return null; 
  }

  try {
    const response = await axiosInstance.get(`/MyImage/List/${userId}`);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error('AxiosError:', err.response?.data || err.message);
      return err.response?.data || { status: err.response?.status, message: err.message };
    }
    console.error('Unexpected error:', err);
    throw err;
  }
};

export default MyImage;
