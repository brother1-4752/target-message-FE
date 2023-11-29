import { useEffect, useState } from 'react'
import { BizTypographyIcon, BrandiIcon, BrandiTypographyIcon } from '../Icons/Icons'
import { StyledSidebar } from './Sidebar.styled'
import SidebarItem from './SidebarItem'

import { SidebarData } from './sidebarContent'

type SidebarProps = {
  sidebarData: SidebarData[]
}

//TODO: desktop, tablet, mobile에 따라 다른 UI를 보여주도록 수정
const SidebarHeader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handlerResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handlerResize)
    return () => window.removeEventListener('resize', handlerResize)
  })
  return (
    <div className="sidebar__header">
      <span>
        <BrandiIcon width={20} height={20} marginRight="10" />
        {/* TODO: 아래처럼 조건부 거는게 나을지, 아니면 데스크탑/테블릿 나눠서 각각 따로 UI 컴포넌트를 만드는게 나을지 고민하기 */}
        {windowWidth > 992 && (
          <>
            <BrandiTypographyIcon width={80} />
            <BizTypographyIcon height={22} width={22} />
          </>
        )}
      </span>
    </div>
  )
}

//TODO: window.innerWidth값은 계속 트랙킹되니, 이에 따라 <DesktopSidebar>, <TabletSidebar>, <MobileSidebar> 컴포넌트를 렌더링하는 방식으로 수정 필요
const Sidebar = ({ sidebarData }: SidebarProps) => {
  return (
    <StyledSidebar className="generallayout__sidebar">
      <SidebarHeader />
      <ul>
        {sidebarData.map((sidebarListItem, index) => (
          <SidebarItem key={index} {...sidebarListItem} />
        ))}
      </ul>
    </StyledSidebar>
  )
}

export default Sidebar
