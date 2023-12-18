import { useWindowWidth } from '../../../hooks/useWindowWidth'
import useToggle from '../../../hooks/useToggle'
import styled from 'styled-components'

import { ToggleDownIcon, ToggleUpIcon } from '../Icons/Icons'
import { SidebarData } from './sidebarContent'

const SidebarItem = ({ label, path, icon, children }: SidebarData) => {
  const windowWidth = useWindowWidth()
  const { isToggleOn, handleClick } = useToggle(path as string)

  return (
    <>
      {windowWidth > 768 && (
        <>
          <StyledSidebarListItem onClick={handleClick}>
            <div>
              <span>{icon}</span>
              {windowWidth > 992 && <span>{label}</span>}
            </div>
            {windowWidth > 992 && (
              <div>{isToggleOn ? children && <ToggleUpIcon /> : children && <ToggleDownIcon />}</div>
            )}
          </StyledSidebarListItem>

          {isToggleOn &&
            children?.map((childSidebarListItem, index) => <SidebarItem key={index} {...childSidebarListItem} />)}
        </>
      )}
    </>
  )
}

export default SidebarItem

const StyledSidebarListItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.color.white300};
  border-radius: 1px solid ${({ theme }) => theme.color.white300};
  padding: ${({ theme }) => theme.spacing.padding100};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    background-color: ${({ theme }) => theme.color.black200};
  }
`
