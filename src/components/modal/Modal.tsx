import { createPortal } from 'react-dom'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import { useEffect } from 'react'
import { ModalContent, ModalOverlay } from './Modal.styled'

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
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
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
    <ModalOverlay>
      <ModalContent>{children}</ModalContent>
    </ModalOverlay>,
    modalRoot
  )
}

export default Modal
