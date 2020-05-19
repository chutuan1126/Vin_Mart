import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

const ContainerModal = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99999;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .5);
`;

const Modal = ({ isShowing, content }) => isShowing ? ReactDOM.createPortal(
  <ContainerModal>
    {content}
  </ContainerModal>, document.body
) : null;

export default Modal;