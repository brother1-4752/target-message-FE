import styled from 'styled-components'
import { ClockIcon, HomeIcon, ListMenuIncon } from '../Icons/Icons'
import { HTMLAttributes } from 'react'

interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {}

const Header = (props: HeaderProps) => {
  return (
    <StyledHeader {...props} className="generallayout__header">
      <div>
        <ListMenuIncon style={{ marginLeft: '20px' }} />
      </div>
      <div className="header__right">
        <ClockIcon />
        <span>03:00:00</span>
        |
        <HomeIcon width={16} height={16} marginRight="0" />
        <span>브랜디 어드민 바로가기</span>|<span>로그아웃</span>
      </div>
    </StyledHeader>
  )
}

export default Header

//TODO: 215px, 52px 반응형에 맞게 동적으로 바뀌는 변수로 만들기
const StyledHeader = styled.header`
  position: fixed;
  margin-left: ${({ theme }) => theme.spacing.sidebarLargeDesktop.left};
  top: 0;
  width: calc(100% - ${({ theme }) => theme.spacing.sidebarLargeDesktop.left});
  height: ${({ theme }) => theme.spacing.sidebarLargeDesktop.top};
  background: ${({ theme }) => theme.color.white100};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.white200};

  .header__right {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 8px;
    margin-right: 8px;
  }
`
