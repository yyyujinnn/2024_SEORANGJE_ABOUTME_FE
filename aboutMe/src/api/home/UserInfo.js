
import axiosInstance from '..';

const MyImage = async () => {
  try {
    const response = await axiosInstance.get(`/info`);

    return response.data;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};

export default MyImage;