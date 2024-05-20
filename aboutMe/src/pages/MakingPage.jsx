import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import HeartFolder from "../assets/MakingPage/HeartFolder.svg";
import Modal from "../Components/Modal";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";

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
  margin: 40px 10px 0 10px;
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

// 이미지 더미데이터 예시
const categoriesData = [
  {
    name: "음식을",
    images: [img1, img2],
  },
  {
    name: "장소를",
    images: [img3, img4],
  },
  {
    name: "동물을",
    images: [img5, img1],
  },
  {
    name: "장소를",
    images: [img4, img4],
  },
  {
    name: "캐릭터를",
    images: [img5, img5],
  },
];

const MakingPage = () => {
  const [categories, setCategories] = useState(categoriesData);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [showWriting, setWriting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        const newImage = reader.result;
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

  const nextCategory = () => {
    if (currentCategory < categories.length - 1) {
      setCurrentCategory(currentCategory + 1);
      setCurrentImage(0); // 새로운 카테고리로 넘어갈 때 이미지 인덱스 초기화
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
  const handleHomeClick = () => {
    navigate(`/`);
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
          ? `주희와 어울리는 ${categories[currentCategory].name} 골라줘!`
          : "마지막으로 한마디를 남겨줘!"}
      </QuestionContainer>
      {!showWriting ? (
        <>
          <PictureContainer>
            <PictureText>토마토</PictureText>
            <ArrowWrapper>
              <LeftArrow onClick={prevImage} />
              <Image src={categories[currentCategory].images[currentImage]} alt="img" />
              {/* {image.map((image, index) => (
                <Image key={index} src={image} alt={`Image ${index}`} />
              ))} */}
              <RightArrow onClick={nextImage} />
            </ArrowWrapper>
            <PictureText>동글동글 달짝지근, 여름을 닮은 토마토</PictureText>
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
        <ModalText>전송 준비가{"\n"} 완료되었습니다!</ModalText>
        <RowWrapper>
          <ModalBtn onClick={closeModal}>수정</ModalBtn>
          <ModalUploadBtn onClick={handleHomeClick}>업로드</ModalUploadBtn>
        </RowWrapper>
      </Modal>
    </ScreenContainer>
  );
};

export default MakingPage;
