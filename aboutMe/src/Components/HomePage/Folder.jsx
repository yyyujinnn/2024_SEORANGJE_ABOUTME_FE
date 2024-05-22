import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MyImage from '../../api/home/MyImage';

const FolderGrid = styled.div`
  position: absolute;
  top: 17%;    
  gap: 40px;
  display: flex;
  justify-content: center;
  align-items: center; 
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  z-index: 2;
`;

const FolderItem = styled.div`
  background-color: none;
  border: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Visitor = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  margin-top: 15px;
`;


export const Folder = ({ userId, currentPage, itemsPerPage }) => {
  const navigate = useNavigate();
  const [folderItems, setFolderItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFolderItems = async () => {
      try {
        const data = await MyImage(userId);
        console.log('UserId', userId);

        if (!data || data.length === 0 || data[0].id === null) {
          console.log('데이터가 없습니다.');
          setError('데이터가 없습니다.');
          return error;
        }
        

        const MyImageData = data.map((item, index)  => ({
          guestNickname: item.guestNickname,
          folderImageUrl: item.folderImageUrl,
          id: item.id,
          originalIndex: index,
        }));

        console.log('MyImageData:', MyImageData);
        setFolderItems(MyImageData);
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
        setError('데이터 가져오기 오류: ' + error.message);
      }
    };

    fetchFolderItems();
  }, [userId]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = folderItems.slice(startIndex, startIndex + itemsPerPage);

  const handleIconClick = (index, id) => {
    navigate(`/diary/${index}/${id}`);
  };
  

  return (
    <FolderGrid>
      {currentItems.map((item) => (
        <FolderItem key={item.id} onClick={() => handleIconClick(item.originalIndex, item.id)}>
          <img src={item.folderImageUrl} alt={item.folderImageUrl} />
          <Visitor>{item.guestNickname}</Visitor>
        </FolderItem>
      ))}
    </FolderGrid>
  );
};

Folder.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
};
