import PropTypes from "prop-types";
import styled from "styled-components";
import TopTab from "../assets/MakingPage/TopTab.svg";

const ModalWrapper = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${(props) => (props.show ? "fadeIn 0.3s" : "fadeOut 0.3s")};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 15% auto;
  border: 1px solid #000;
  width: 90%;
  max-width: 500px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  animation: ${(props) => (props.show ? "slideIn 0.3s" : "slideOut 0.3s")};

  @keyframes slideIn {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-50px);
      opacity: 0;
    }
  }
`;
const Image = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

const Modal = ({ show, handleClose, children }) => {
  return (
    <ModalWrapper show={show} onClick={handleClose}>
      <ModalContent show={show} onClick={(e) => e.stopPropagation()}>
        <Image src={TopTab} />
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
