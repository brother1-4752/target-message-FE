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
`
