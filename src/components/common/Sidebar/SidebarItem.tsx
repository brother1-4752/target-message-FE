import { MouseEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SidebarData } from './sidebarContent'
import { OnOffIcon, ToggleDownIcon, ToggleUpIcon } from '../Icons/Icons'
import styled from 'styled-components'
import { css } from 'styled-components'

const SidebarItem = ({
  label,
  isprofile,
  path,
  icon,
  hasOnOff,
  hasHover,
  description,
  children,
  depth,
}: SidebarData) => {
  const [isToggleOn, setIsToggleOn] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
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

  useEffect(() => {
    const handlerResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handlerResize)
    return () => window.removeEventListener('resize', handlerResize)
  })

  return (
    <>
      {windowWidth > 768 && (
        <>
          <Box
            hasHover={hasHover}
            isprofile={isprofile}
            label={label}
            depth={depth}
            data-path={path}
            onClick={handleClick}
          >
            <div>
              <span>{icon}</span>
              {windowWidth > 992 && <span>{label}</span>}
            </div>
            {/* TODO: 커스텀 토글 버튼 만들기 */}
            {windowWidth > 992 && (
              <div>
                {hasOnOff && <OnOffIcon width={44} height={22} />}
                {description && <span>{description}</span>}
                {isToggleOn ? children && <ToggleUpIcon /> : children && <ToggleDownIcon />}
              </div>
            )}
          </Box>

          {isToggleOn &&
            children?.map((childSidebarListItem, index) => <SidebarItem key={index} {...childSidebarListItem} />)}
        </>
      )}
    </>
  )
}

export default SidebarItem

const PointCssProps = css<{ label: string }>`
  height: ${(props) => (props.label === '포인트' ? '48px' : '40px')};
  font-family: ${(props) => props.label === '포인트' && 'SpoqaHanSansM'};
  background: ${(props) => props.label === '포인트' && props.theme.color.gradient100};
  cursor: ${(props) => props.label === '포인트' && 'pointer'};
  &:hover {
    animation: ${(props) => props.label === '포인트' && 'fadeIn 3s both'};
  }
`

const Box = styled.li<{
  label: string
  isprofile: boolean | undefined
  hasHover: boolean | undefined
  depth: number | undefined
}>`
  ${PointCssProps}

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.padding100};
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.color.white300};
  width: 100%;

  background: ${(props) => props.isprofile && props.theme.color.black200};
  cursor: ${(props) => props.hasHover && 'pointer'};
  &:hover {
    background: ${(props) => props.hasHover && props.theme.color.black200};
  }

  padding-left: ${(props) => props.depth && `${props.depth * 16}px`};
`
