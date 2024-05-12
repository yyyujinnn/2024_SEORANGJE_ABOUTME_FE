import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";

const images = [img1, img2, img3, img4, img5];

const ScreenContainer = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background: #ff8caf;
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
  font-size: 20px;
  font-weight: 400;
  color: #000;
`;
const TitleText = styled.div`
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
  padding: 10px 16px 18px 16px;
  border: 1px solid #000;
  background: linear-gradient(180deg, #c0ee41 0%, #fff 133.93%);
  color: #000;
  font-size: 20px;
  font-weight: 400;
  white-space: pre;
`;
const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  padding: 22px 0 40px 0;
  border: 1px solid #000;
  background: #fff;
`;
const PictureText = styled.div`
  color: #ffc700;
  text-align: center;
  text-shadow: -0.3px 0px black, 0px 0.3px black, 0.3px 0px black, 0px -0.3px black;
  font-family: "S-Core Dream";
  font-size: 15px;
  font-style: normal;
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
  margin: 0 10px;
  padding: 20px;
  border: 1px solid #000;
  background: #fff;
`;
const UploadButton = styled.button`
  margin: 0;
  padding: 8px 10px;
  border: 1px solid #000;
  background: #fff;
  font-size: 35px;
  color: black;
`;
const ProgressContainer = styled(RowWrapper)`
  margin: 40px 10px 0 10px;
`;
const Text = styled.div`
  color: #000;
  text-align: center;
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
  width: 34px;
  height: 9px;
  background-color: ${(props) => (props.isActive ? "#C1EE44" : "#CCCCCC")};
  margin: 2px;
`;
const CircleLeftArrow = styled(LeftArrow)`
  border-radius: 50%;
  background-color: white;
`;
const CircleRightArrow = styled(RightArrow)`
  border-radius: 50%;
  background-color: white;
`;

const MakingPage = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [preview, setPreview] = useState();
  const nextImage = () => {
    setCurrentImg((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
  };
  const prevImage = () => {
    setCurrentImg((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
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
      <QuestionContainer>Q1{"\n"}주희와 어울리는 음식을 골라줘!</QuestionContainer>
      <PictureContainer>
        <PictureText>토마토</PictureText>
        <ArrowWrapper>
          <LeftArrow onClick={prevImage} />
          <Image src={images[currentImg]} alt="img" />
          <RightArrow onClick={nextImage} />
        </ArrowWrapper>
        <PictureText>동글동글 달짝지근, 여름을 닮은 토마토</PictureText>
      </PictureContainer>
      <RowWrapper>
        <UploadText>원하는 이미지가 없다면 직접 올려봐!</UploadText>
        <UploadButton type="file" onClick={handleImageChange} ref={fileInputRef}>
          <IoCameraOutline />
        </UploadButton>
      </RowWrapper>
      <ProgressContainer>
        <CircleLeftArrow />
        <Text>이전</Text>
        <ProgressBarWrapper>
          {images.map((_, index) => (
            <ProgressBar key={index} isActive={index <= currentImg} />
          ))}
        </ProgressBarWrapper>
        <Text>다음</Text>
        <CircleRightArrow />
      </ProgressContainer>
    </ScreenContainer>
  );
};

export default MakingPage;
