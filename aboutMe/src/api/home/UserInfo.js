
import axiosInstance from '..';

const UserUnfo = async () => {
  try {

    const token = localStorage.getItem('token');

    const response = await axiosInstance.get(`/info`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    return err.response;
  }
};

export default UserUnfo;