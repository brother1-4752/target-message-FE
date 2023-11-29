import { createPortal } from 'react-dom'

interface Image {
  image_type: 'general' | 'wide'
  image_url: string
  image_name: string
  checked: boolean
}

interface ModalProps {
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ onClose, children }: ModalProps) => {
  const modalRoot = document.getElementById('modal-root')

  if (!modalRoot) return null

  return createPortal(
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content">{children}</div>
    </div>,
    modalRoot
  )
}
