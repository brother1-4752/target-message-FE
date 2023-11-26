import { BizTypographyIcon, BrandiIcon, BrandiTypographyIcon } from '../Icons/Icons'
import { StyledSidebar } from './Sidebar.styled'
import SidebarItem from './SidebarItem'

import { SidebarData } from './sidebarContent'

type SidebarProps = {
  sidebarData: SidebarData[]
}

const SidebarHeader = () => {
  return (
    <div className="sidebar__header">
      <BrandiIcon width={22} height={22} marginRight="10" />
      <BrandiTypographyIcon width={80} />
      <BizTypographyIcon height={22} width={22} />
    </div>
  )
}

const Sidebar = ({ sidebarData }: SidebarProps) => {

  
  return (
    <StyledSidebar>
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
