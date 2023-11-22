import { StyledSidebar } from './Sidebar.styled'
import SidebarItem from './SidebarItem'
import { AccessSidebarData } from './sidebarContent'

type SidebarProps = {
  sidebarData: AccessSidebarData[]
}

const Sidebar = ({ sidebarData }: SidebarProps) => {
  return (
    <StyledSidebar className="generallayout__sidebar">
      <ul>
        {sidebarData.map((sidebarListItem, index) => (
          <SidebarItem key={index} {...sidebarListItem} />
        ))}
      </ul>
    </StyledSidebar>
  )
}

export default Sidebar
