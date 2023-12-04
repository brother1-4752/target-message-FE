import { createPortal } from 'react-dom'

import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import { ModalContent, ModalOverlay } from './Modal.styled'

interface ModalProps {
  children: React.ReactNode
  onClose?: () => void
}

const Modal = ({ onClose, children }: ModalProps) => {
  const modalRoot = document.getElementById('modal-root')
  useLockBodyScroll()

  if (!modalRoot) return null

  return createPortal(
    <ModalOverlay>
      <ModalContent>{children}</ModalContent>
    </ModalOverlay>,
    modalRoot
  )
}

export default Modal
