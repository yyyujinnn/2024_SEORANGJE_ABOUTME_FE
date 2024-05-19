import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import HardDisk from '../../assets/Folder/HardDisk.svg';
import Paper from '../../assets/Folder/Paper.svg';
import Computer from '../../assets/Folder/Computer.svg';
import Letter from '../../assets/Folder/Letter.svg';
import Default from '../../assets/Folder/Default.svg';
import Music from '../../assets/Folder/Music.svg';

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
  z-index : 2;
`;

const FolderItem = styled.div`
  background-color: none;
  border: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Visitor = styled.text`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  margin-top: 15px;
`

export const Folder = ({ currentPage, itemsPerPage }) => {

  const folderItems = [
    { img: HardDisk, name: '주희' },
    { img: Paper, name: '쿨냥이' },
    { img: Computer, name: '지윤' },
    { img: Letter, name: '유진' },
    { img: Music, name: '민지' },
    { img: Default, name: '소현' },
    { img: Letter, name: '유진' },
    { img: Music, name: '민지' },
    { img: Default, name: '소현' },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = folderItems.slice(startIndex, startIndex + itemsPerPage);

  const handleIconClick = {
    // icon 클릭하면 해당하는 diary로 이동

  };

    return(    
        <FolderGrid>

          {currentItems.map((item, index) => (
            <FolderItem key={index} onClick={handleIconClick}>
             <img src={item.img} alt={item.name} />
             <Visitor> {item.name} </Visitor>
            </FolderItem>
          ))}

        </FolderGrid>
    )
}