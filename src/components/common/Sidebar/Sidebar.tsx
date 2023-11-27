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
