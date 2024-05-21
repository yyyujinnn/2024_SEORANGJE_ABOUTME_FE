import axiosInstance from '..';

const getMyImage = async (myimage_id) => {
  if (!myimage_id) {
    console.error('myimage_id가 유효하지 않습니다.');
    return null;
  }

  try {
    const response = await axiosInstance.get(`/MyImage/${myimage_id}`);
    return response.data;
  } catch (err) {
    console.error('getMyImage 오류:', err);
    throw new Error('이미지를 가져오는 중에 오류가 발생했습니다.');
  }
};

export default getMyImage;
