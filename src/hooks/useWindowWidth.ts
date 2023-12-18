import { useEffect, useState } from 'react'

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handlerResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handlerResize)
    return () => window.removeEventListener('resize', handlerResize)
  })

  return windowWidth
}
