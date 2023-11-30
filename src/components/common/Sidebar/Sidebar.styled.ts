import styled from 'styled-components'

export const StyledSidebar = styled.div`
  font-family: SpoqaHanSansT;
  width: ${({ theme }) => theme.spacing.sidebarLargeDesktop.left};
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.black100};
  color: ${({ theme }) => theme.color.white200};
  fill: ${({ theme }) => theme.color.white200};
  font-size: ${({ theme }) => theme.font.getSize(14)};
  position: fixed;
  left: 0;
  top: 0;

  .sidebar__header {
    display: flex;
    height: ${({ theme }) => theme.spacing.sidebarLargeDesktop.top};
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.margin100};
    box-sizing: border-box;
    border-bottom: 1px solid ${({ theme }) => theme.color.white300};
  }
`
