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
  top: 15%;
  left: 10%;
  width: 80%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
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

export const Folder = () => {

    return(    
        <FolderGrid>

          <FolderItem> 
            <img src={HardDisk}/> 
            <Visitor> 주희 </Visitor>
          </FolderItem>

          <FolderItem> <img src={Paper}/> 
            <Visitor> 쿨냥이 </Visitor> 
          </FolderItem>

          <FolderItem> <img src={Computer}/> 
            <Visitor> 지윤 </Visitor> 
          </FolderItem>

          <FolderItem> <img src={Letter}/> 
            <Visitor> 유진 </Visitor> 
          </FolderItem>

          <FolderItem> <img src={Music}/> 
            <Visitor> 민지 </Visitor> 
          </FolderItem>

          <FolderItem> <img src={Default}/> 
            <Visitor> 소현 </Visitor>
          </FolderItem>

        </FolderGrid>
    )
}