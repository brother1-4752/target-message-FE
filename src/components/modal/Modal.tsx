import { createPortal } from 'react-dom'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import { useEffect } from 'react'
import styled from 'styled-components'

export type ImageType = 'general' | 'wide'

export type ImageTypeProps = {
  [key in ImageType]: ImageCardProps[]
}

export interface ImageCardProps {
  id: number
  image_url: string
  image_name: string
  image_link: string
  checked?: boolean
}

interface ModalProps {
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ onClose, children }: ModalProps) => {
  const modalRoot = document.getElementById('modal-root')
  useLockBodyScroll()

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!modalRoot) return null

  return createPortal(
    <ModalOverlay className="modal__overlay">
      <ModalContent className="modal__content">{children}</ModalContent>
    </ModalOverlay>,
    modalRoot
  )
}

export default Modal

const ModalOverlay = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalContent = styled.div`
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
