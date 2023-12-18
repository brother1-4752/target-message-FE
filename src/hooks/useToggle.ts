import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useToggle = (path: string) => {
  const [isToggleOn, setIsToggleOn] = useState(false)
  const naviagte = useNavigate()

  const handleClick = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault()
    setIsToggleOn((prev) => !prev)
    naviagte(path as string)

    if (!isToggleOn) {
      event.currentTarget.style.backgroundColor = '#27272B'
    } else {
      event.currentTarget.style.backgroundColor = '#35363A'
    }
  }

  return { isToggleOn, handleClick }
}

export default useToggle
