import styled from 'styled-components'

export const ModalOverlay = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContent = styled.div`
  width: 500px;
  height: 441px;
  display: flex;
  flex-direction: column;
  padding: 32px 24px 32px 24px;
  gap: 32px;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 1);

  .modal__wrapper {
    width: 100%;
    height: 80%;
    .modal__header {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
`
