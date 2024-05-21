import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import IntWin from "../assets/HomePage/IntWin.svg";
import DiaryName from "../assets/HomePage/DiaryName.svg";
import pre from "../assets/HomePage/HomePre.svg";
import next from "../assets/HomePage/HomeNext.svg";
import { Folder } from "../Components/HomePage/Folder";

const MainBody = styled.div`
  background: linear-gradient(180deg, #ff8caf 0%, #fff 100%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Version = styled.div`
  transform: scale(0.9);

  @media (max-width: 380px) {
    height: 700px;
    transform: scale(0.8);
  }

  @media (min-width: 800px) {
    height: 1150px;
    transform: scale(1.5);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 82px;
  font-size: 24px;
  margin-top: 35px;
  gap: 5px;

  @media (max-width: 380px) {
    margin-top: -30px;
  }

  @media (min-width: 800px) {
    margin-top: 300px;
  }
`;

const NameImg = styled.img`
  display: flex;
  align-items: center;
  margin-top: -100px;
  z-index: 1;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 4px 8px;
  border-radius: 28px;
  border: 1px solid #000;
  background: linear-gradient(180deg, #7ef6ff 0%, #fff 100%);
  z-index: 2;
`;

const Sub_Title = styled.div`
  font-size: 40px;
  color: #fff;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;

const FolderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%; /* Folder의 너비를 100%로 설정 */
  height: 600px;
`;

const Img = styled.img`
  margin-top: 35px;
  z-index: 1;
`;

const BtnPre = styled.button`
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  z-index: 3;
`;

const BtnNext = styled.button`
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  z-index: 3;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 30px 30px;
  gap: 6px;
`;

// 게스트.ver
const BtnDiary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 172px;
  height: 46px;
  background: #fff;
  border-radius: 0px;
  border: 1px solid #000;
  font-size: 13px;
  color: #000;
  cursor: pointer;
  font-family: "DungGeunMo";
`;
const BtnIcon2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 152px;
  height: 46px;
  background: linear-gradient(180deg, #ff8caf 0%, #fff 85.29%);
  border-radius: 0px;
  border: 1px solid #000;
  font-size: 13px;
  color: #000;
  cursor: pointer;
  font-family: "DungGeunMo";
`;

const GuestPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [dataLength, setDataLength] = useState(0);

  const { uuid } = useParams();
  const [hostId, setHostId] = useState();
  const [hostname, setHostName] = useState();

  const baseUrl = `https://port-0-seorangje-aboutme-be-2024-1ru12mlwc1mxvw.sel5.cloudtype.app`;

  useEffect(() => {
    axios
      .get(`${baseUrl}/${uuid}`)
      .then((response) => {
        setHostId(response.data.userId);
        setHostName(response.data.username);
      })
      .catch((error) => console.error("Error:", error));
  }, [uuid]);

  //페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = dataLength;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSignupClick = () => {
    navigate(`/sign-up`);
  };

  const handleMakingClick = () => {
    navigate(`/making`);
  };

  return (
    <MainBody>
      <Version>
        <TitleContainer>
          <Title> {hostname}의 </Title>
          <Sub_Title> 미니홈피 </Sub_Title>
          <NameImg src={DiaryName} />
        </TitleContainer>

        <FolderContainer>
          <Img src={IntWin} alt="InternetWindow" />
          <BtnPre onClick={handlePrevPage}>
            {" "}
            <img src={pre} />{" "}
          </BtnPre>
          <BtnNext onClick={handleNextPage}>
            {" "}
            <img src={next} />{" "}
          </BtnNext>
          <Folder currentPage={currentPage} itemsPerPage={itemsPerPage} userId={hostId} />
        </FolderContainer>

        {/* 게스트.ver */}
        <ButtonContainer>
          <BtnDiary onClick={handleSignupClick}> 내 미니홈피 만들러 가기</BtnDiary>
          <BtnIcon2 onClick={handleMakingClick}> 아이콘 남기기 </BtnIcon2>
        </ButtonContainer>
      </Version>
    </MainBody>
  );
};

export default GuestPage;
