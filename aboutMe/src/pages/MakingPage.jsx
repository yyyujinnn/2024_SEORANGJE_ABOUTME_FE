import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import HeartFolder from "../assets/MakingPage/HeartFolder.svg";
import {
  fetchUserInfo,
  fetchImages,
  fetchUserCategories,
  fetchGuestCategories,
  submitImage,
} from "./Auth/AuthAPI";
import Modal from "../Components/Modal";

const ScreenContainer = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background: linear-gradient(
    180deg,
    #ff8caf 0%,
    #fff 64.14%,
    #fff 83.13%,
    #ffbcd1 95.5%,
    #ff8caf 100.58%
  );
`;
const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const TitleContainer = styled(RowWrapper)`
  margin-bottom: 36px;
`;
const SmallTextBox = styled.div`
  margin: 9px 10px;
  padding: 7px 20px;
  border: 1px solid #000;
  border-radius: 28px;
  background: linear-gradient(180deg, #d3fcff 0%, #fff 133.93%);
  text-align: center;
  font-family: "NeoDunggeunmo";
  font-size: 20px;
  font-weight: 400;
  color: #000;
`;
const TitleText = styled.div`
  font-family: "NeoDunggeunmo";
  font-size: 40px;
  font-weight: 400;
  color: #000;
`;
const WhiteWrapper = styled.div`
  color: #fff;
  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
  white-space: pre;
`;
const QuestionContainer = styled.div`
  width: 332px;
  padding: 10px 14px 18px 14px;
  border: 1px solid #000;
  box-sizing: border-box;
  background: linear-gradient(180deg, #c0ee41 0%, #fff 133.93%);
  color: #000;
  font-family: "NeoDunggeunmo";
  font-size: 20px;
  line-height: 30px;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
  text-align: center;
`;
const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 332px;
  margin: 10px 0;
  padding: 22px 0 40px 0;
  border: 1px solid #000;
  background: #fff;
`;
const PictureText = styled.div`
  color: #ffc700;
  text-align: center;
  text-shadow: -0.3px 0px black, 0px 0.3px black, 0.3px 0px black, 0px -0.3px black;
  font-family: "S-CoreDreams";
  font-size: 15px;
  font-weight: 300;
  line-height: normal;
`;
const LeftArrow = styled(IoIosArrowBack)`
  margin: 0 8px;
  padding: 2px;
  border: 1px solid #000;
  font-size: 25px;
`;
const RightArrow = styled(IoIosArrowForward)`
  margin: 0 8px;
  padding: 2px;
  border: 1px solid #000;
  font-size: 25px;
`;
const Image = styled.img`
  width: 230px;
  height: 230px;
  object-fit: cover;
`;
const ArrowWrapper = styled(RowWrapper)`
  margin: 10px 0;
`;
const UploadText = styled.div`
  width: 230px;
  margin-right: 5px;
  padding: 20px;
  border: 1px solid #000;
  background: #fff;
  font-family: "NeoDunggeunmo";
  font-size: 13px;
  text-align: center;
`;
const UploadInput = styled.input`
  display: none;
`;
const UploadButton = styled.label`
  width: 52px;
  margin-left: 5px;
  padding-top: 10px;
  border: 1px solid #000;
  background: #fff;
  font-size: 35px;
  text-align: center;
  color: black;
`;
const ProgressContainer = styled(RowWrapper)`
  margin: 40px 10px 15px 10px;
`;
const Text = styled.div`
  color: #000;
  text-align: center;
  font-family: "NeoDunggeunmo";
  font-size: 13px;
  font-weight: 400;
`;
const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 12px;
  border: 1px solid #000;
  background: #fff;
`;
const ProgressBar = styled.div`
  width: 27px;
  height: 9px;
  background-color: ${(props) => (props.isActive ? "#C1EE44" : "#CCCCCC")};
  margin: 1px;
`;
const CircleLeftArrow = styled(LeftArrow)`
  border-radius: 50%;
  background-color: white;
`;
const CircleRightArrow = styled(RightArrow)`
  border-radius: 50%;
  background-color: white;
`;
const WritingContainer = styled.div`
  position: relative;
  width: 332px;
  height: 347px;
  margin: 10px 0;
  background: linear-gradient(transparent 39px, #ccc 24px);
  background-color: white;
  background-size: 100% 40px;
  //padding: 20px;
  border: 1px solid #000;
`;
const TextArea = styled.textarea`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: "NeoDunggeunmo";
  font-size: 15px;
  line-height: 40px; //WritingContainer하고 같아야 함
  color: #333; /* Text color */
  padding: 10px;
  box-sizing: border-box;
`;
const SenderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 272px;
  padding: 20px 30px;
  border: 1px solid #000;
  font-family: "NeoDunggeunmo";
  font-size: 15px;
  background: #fff;
`;
const SenderLabel = styled.span`
  margin-right: 4px;
`;
const SenderInput = styled.input`
  font-family: "NeoDunggeunmo";
  font-size: 15px;
  border: transparent;
  outline: none;
`;
const ModalImg = styled.img`
  height: auto;
  padding: 0 80px;
`;
const ModalText = styled.div`
  color: #000;
  text-align: center;
  font-family: NeoDunggeunmo;
  font-size: 22px;
  line-height: 28px; /* 127.273% */
  white-space: pre;
`;
const ModalBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95px;
  height: 44px;
  margin: 25px 12.5px;
  border-radius: 26.5px;
  border: 1px solid #000;
  color: #000;
  text-align: center;
  font-family: "PFStardust";
  font-size: 16px;
  background: #fff;
`;
const ModalUploadBtn = styled(ModalBtn)`
  background: linear-gradient(180deg, #ff8caf 0%, #fff 100%);
`;

//카테고리 이름 매핑
const categoryNameMap = {
  food: "음식을",
  place: "장소를",
  animal: "동물을",
  charac: "캐릭터를",
  flower: "꽃을",
  season: "계절을",
  color: "색깔을",
  hobby: "취미를",
  job: "직업을",
};

const MakingPage = () => {
  const { uuid } = useParams();
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);

  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [showWriting, setWriting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [imageFiles, setImageFiles] = useState({});
  const [imageUrls, setImageUrls] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const processImagesData = (imagesData, activeCategories) => {
    // activeCategories가 정확히 5개만 되도록 수정
    if (activeCategories.length > 5) {
      activeCategories = activeCategories.slice(0, 5);
    }
    return activeCategories.map((categoryKey) => {
      const categoryData = imagesData.defaultImages
        .filter((item) => item.category === categoryKey)
        .map((item) => ({
          id: item.id,
          imageName: item.imageName,
          imageDetail: item.imageDetail,
          filePath: item.filePath,
        }));
      return {
        name: categoryNameMap[categoryKey],
        categoryKey,
        images: categoryData,
      };
    });
  };

  const fetchUserData = useCallback(async (uuid) => {
    if (uuid) {
      // 게스트로 접근
      const guestData = await fetchGuestCategories(uuid);
      console.log("Guest Data:", guestData);
      setUserId(guestData.userId);
      setUsername(guestData.username);

      const userCategoriesResponse = await fetchUserCategories(guestData.userId);
      console.log("User Categories Response:", userCategoriesResponse);
      const userCategories = userCategoriesResponse.subjects;
      const activeCategories = Object.keys(userCategories).filter((key) => userCategories[key]);
      const imagesData = await fetchImages(guestData.userId);
      console.log("Images Data (Guest):", imagesData);

      return processImagesData(imagesData, activeCategories);
    } else {
      // 로그인한 사용자
      const userInfo = await fetchUserInfo();
      console.log("User Info:", userInfo);
      const user = userInfo.principalDetails.principal.user;
      setUserId(user.id);
      setUsername(user.username);

      const userCategoriesResponse = await fetchUserCategories(user.id);
      console.log("User Categories Response:", userCategoriesResponse);
      const userCategories = userCategoriesResponse.subjects;
      const activeCategories = Object.keys(userCategories).filter((key) => userCategories[key]);
      const imagesData = await fetchImages(user.id);
      console.log("Images Data (User):", imagesData);

      return processImagesData(imagesData, activeCategories);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const combinedData = await fetchUserData(uuid);
        if (combinedData) {
          setCategories(combinedData);
        }
        console.log("Combined Data:", combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchUserData, uuid]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        const newImage = { id: Date.now(), filePath: reader.result };
        const updatedCategories = [...categories];
        updatedCategories[currentCategory].images.unshift(newImage);
        setCategories(updatedCategories);
        setCurrentImage(0);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const prevCategory = () => {
    if (showWriting) {
      setCurrentCategory(currentCategory);
      setWriting(false);
    } else if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1);
      setCurrentImage(0); // 새로운 카테고리로 넘어갈 때 이미지 인덱스 초기화
    }
  };
  const nextCategory = async () => {
    // 현재 이미지 URL을 임시 저장
    const currentCategoryKey = categories[currentCategory]?.categoryKey;
    const currentCategoryImages = categories[currentCategory]?.images;
    if (currentCategoryImages && currentCategoryImages[currentImage]) {
      const currentImageURL = currentCategoryImages[currentImage].filePath;

      if (currentImageURL.startsWith("data:image/")) {
        // 사용자가 업로드한 이미지인 경우
        setImageFiles((prevFiles) => {
          const newFiles = {
            ...prevFiles,
            [currentCategoryKey]: currentImageURL,
          };
          console.log("Updated imageFiles in nextCategory:", newFiles); // 업데이트된 상태를 콘솔에 출력
          return newFiles;
        });
      } else {
        // 기본 이미지를 선택한 경우
        setImageUrls((prevUrls) => {
          const newUrls = {
            ...prevUrls,
            [currentCategoryKey]: currentImageURL,
          };
          console.log("Updated imageUrls in nextCategory:", newUrls); // 업데이트된 상태를 콘솔에 출력
          return newUrls;
        });
      }
    }
    // 다음 카테고리로 이동 또는 모든 카테고리 완료 시 서버로 전송
    if (currentCategory < categories.length - 1) {
      setCurrentCategory(currentCategory + 1);
      setCurrentImage(0);
    } else {
      setWriting(true);
    }
  };

  const prevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const nextImage = () => {
    if (currentImage < categories[currentCategory].images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length <= 60) {
      setInputValue(value);
    }
  };

  const handleChange2 = (e) => {
    const { value } = e.target;
    if (value.length <= 5) {
      setInputValue2(value);
    }
  };

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const navigate = useNavigate();
  const handleHomeClick = async () => {
    try {
      if (isSubmitting) return; // 이미 제출 중이면 함수 종료
      setIsSubmitting(true);
      const formData = new FormData();
      for (const key in imageFiles) {
        // base64 데이터에서 파일로 변환
        const byteString = atob(imageFiles[key].split(",")[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ia], { type: "image/png" });
        const file = new File([blob], `${key}.png`);
        formData.append(`imageFiles[${key}]`, file);
      }
      for (const key in imageUrls) {
        formData.append(`imageUrls[${key}]`, imageUrls[key]);
      }
      formData.append("imageComment", inputValue);
      formData.append("guestNickname", inputValue2 || "익명");

      // FormData를 JSON 형식으로 변환 (디버깅 용도)
      const formDataObj = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });

      console.log("FormData as JSON:", JSON.stringify(formDataObj, null, 2));

      if (userId) {
        const response = await submitImage(formData, userId);
        console.log("Image URLs submission response data:", response);

        setIsSubmitting(false); // 요청 완료 후 버튼 활성화
        if (uuid) {
          navigate(`/${uuid}`);
        } else {
          navigate(`/home`);
        }
      } else {
        console.error("User ID is null");
      }
    } catch (error) {
      console.error("Error submitting image URLs:", error);
      setIsSubmitting(false); // 에러 발생 시에도 버튼 활성화
    }
  };

  return (
    <ScreenContainer>
      <SmallTextBox>너의</SmallTextBox>
      <TitleContainer>
        <TitleText>
          <WhiteWrapper>생각을 </WhiteWrapper>
        </TitleText>
        <TitleText>보여줘!</TitleText>
      </TitleContainer>
      <QuestionContainer>
        Q{!showWriting ? currentCategory + 1 : "6"}. {"\n"}
        {!showWriting
          ? <div>{`${username}에게 어울리는`} <br/> {categories[currentCategory]?.name} 골라줘!</div>
          : "마지막으로 한마디를 남겨줘!"}
      </QuestionContainer>
      {!showWriting ? (
        <>
          <PictureContainer>
            <PictureText>
              {categories[currentCategory]?.images[currentImage]?.imageName}
            </PictureText>
            <ArrowWrapper>
              <LeftArrow onClick={prevImage} />
              <Image
                src={categories[currentCategory]?.images[currentImage]?.filePath}
                alt={`${categories[currentCategory]?.images[currentImage]?.filePath}`}
              />
              <RightArrow onClick={nextImage} />
            </ArrowWrapper>
            <PictureText>
              {categories[currentCategory]?.images[currentImage]?.imageDetail}
            </PictureText>
          </PictureContainer>
          <RowWrapper>
            <UploadText>원하는 이미지가 없다면 직접 올려봐!</UploadText>
            <UploadInput
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="upload-input"
            />
            <UploadButton htmlFor="upload-input">
              <IoCameraOutline />
            </UploadButton>
          </RowWrapper>
        </>
      ) : (
        <>
          <WritingContainer>
            <TextArea
              placeholder="여기에 하고싶은 말을 적어봐! (60자)"
              value={inputValue}
              onChange={handleChange}
              maxLength={60}
            />
          </WritingContainer>
          <SenderContainer>
            <SenderLabel>From: </SenderLabel>
            <SenderInput
              type="text"
              placeholder="발신자 이름 (5자)"
              value={inputValue2}
              onChange={handleChange2}
            />
          </SenderContainer>
        </>
      )}
      <ProgressContainer>
        <CircleLeftArrow onClick={prevCategory} />
        <Text>이전</Text>
        <ProgressBarWrapper>
          {[...Array(5)].map((_, index) => (
            <ProgressBar key={index} isActive={index <= currentCategory} />
          ))}
          {/* 여섯 번째 칸은 텍스트로 처리 */}
          <ProgressBar isActive={showWriting} />
        </ProgressBarWrapper>
        <Text>다음</Text>
        <CircleRightArrow onClick={showWriting ? openModal : nextCategory} />
      </ProgressContainer>
      <Modal show={modalVisible} handleClose={closeModal}>
        <ModalImg src={HeartFolder} />
        <ModalText>
          {isSubmitting ? "전송 중....." : `전송 준비가 ${"\n"} 완료되었습니다!`}
        </ModalText>
        <RowWrapper>
          <ModalBtn onClick={closeModal}>수정</ModalBtn>
          <ModalUploadBtn onClick={handleHomeClick} disabled={isSubmitting}>
            업로드
          </ModalUploadBtn>
        </RowWrapper>
      </Modal>
    </ScreenContainer>
  );
};

export default MakingPage;
