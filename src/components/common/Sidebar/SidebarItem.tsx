import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SidebarData } from './sidebarContent'
import { OnOffIcon, ToggleDownIcon } from '../Icons/Icons'
import styled from 'styled-components'

const SidebarItem = ({ label, path, icon, hasOnOff, description, children }: SidebarData) => {
  const [isToggleOn, setIsToggleOn] = useState(false)
  const naviagte = useNavigate()

  return (
    <>
      {children ? (
        <StlyedSidebarListWithChildren>
          <div
            onClick={() => setIsToggleOn((prev) => !prev)}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div>
              <span>{icon}</span>
              <span>{label}</span>
            </div>
            {/* TODO: 커스텀 토글 버튼 만들기 */}
            <ToggleDownIcon />
          </div>

          {isToggleOn && (
            <ul>
              {children.map((childSidebarListItem, index) => {
                return <SidebarItem key={index} {...childSidebarListItem} />
              })}
            </ul>
          )}
        </StlyedSidebarListWithChildren>
      ) : (
        <StlyedSidebarList label={label} onClick={() => naviagte(path as string)}>
          <div>
            <span>{icon}</span>
            <span>{label}</span>
          </div>
          <div>
            {hasOnOff && <OnOffIcon width={44} height={22} />}
            {description && <span>{description}</span>}
          </div>
        </StlyedSidebarList>
      )}
    </>
  )
}

export default SidebarItem

const StlyedSidebarList = styled.li<{ label: string }>`
  display: flex;
  justify-content: space-between;
  background: ${(props) => (props.label === '포인트' ? 'red' : 'inherit')};
`

const StlyedSidebarListWithChildren = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
