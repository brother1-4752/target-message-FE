import { BrandiIcon, BrandiTypographyIcon, HomeIcon, OnOffIcon, PointIcon } from '../Icons/Icons'
import { StyledSidebar } from './Sidebar.styled'
import SidebarItem from './SidebarItem'

import { SidebarData } from './sidebarContent'
import { useWindowWidth } from '../../../hooks/useWindowWidth'
import styled from 'styled-components'

type SidebarProps = {
  sidebarData: SidebarData[]
}

// interface AdminInfoResponse {
//   adminId: string
//   adminNumber: number
//   amdinName: string
// }

// interface SellerInfoResponse {
//   sellerId: string
//   sellerNumber: number
//   sellerName: string
//   sellerPoint: string
//   sellerProducts: Product[]
// }

// interface Product {
//   product_id: string
//   product_name: string
//   price: string
//   is_sell: string
//   img_url: string
// }

export const mockSellerInfoResponse = {
  sellerId: 's_1', // pk
  sellerNumber: 1234, // 판매자번호
  sellerName: '카코카코', // 판매자명
  sellerPoint: '1230000',
  sellerProducts: [
    {
      product_id: 'p_1',
      product_name: '테스트 상품',
      price: '10000',
      is_sell: '판매중',
      img_url: '테스트 이미지 소스',
    },
    {
      product_id: 'p_2',
      product_name: '테스트 상품2',
      price: '50000',
      is_sell: '품절',
      img_url: '테스트 이미지 소스2',
    },
  ],
}

// const mockAdminInfoResponse: AdminInfoResponse = {
//   adminId: 'a_1',
//   adminNumber: 4321,
//   amdinName: '나나나 관리자',
// }

//TODO: desktop, tablet, mobile에 따라 다른 UI를 보여주도록 수정
// const SidebarHeader = () => {
//   const windowWidth = useWindowWidth()

//   return (
//     <div className="sidebar__header">
//       <span>
//         {windowWidth > 768 && <BrandiIcon width={20} height={20} marginRight="10" />}
//         {/* TODO: 아래처럼 조건부 거는게 나을지, 아니면 데스크탑/테블릿 나눠서 각각 따로 UI 컴포넌트를 만드는게 나을지 고민하기 */}
//         {windowWidth > 992 && (
//           <>
//             <BrandiTypographyIcon width={80} />
//             <BizTypographyIcon height={22} width={22} />
//           </>
//         )}
//       </span>
//     </div>
//   )
// }

const SidebarHeader = ({ windowWidth }: { windowWidth: number }) => {
  return (
    <>
      <StyledSidebarHeader>
        <li className="sidebar__header">
          <div>
            <span>
              {windowWidth > 768 && <BrandiIcon width={20} height={20} marginRight="10" />}
              {/* TODO: 아래처럼 조건부 거는게 나을지, 아니면 데스크탑/테블릿 나눠서 각각 따로 UI 컴포넌트를 만드는게 나을지 고민하기 */}
              {windowWidth > 992 && (
                <>
                  <BrandiTypographyIcon width={80} />
                  <span className="sidebar__header--bizText">biz</span>
                </>
              )}
            </span>
          </div>
        </li>
        {windowWidth > 992 && (
          <>
            <li className="sidebar__profile">
              <div>
                <span>
                  <HomeIcon />
                </span>
                <span>
                  {mockSellerInfoResponse.sellerName}({mockSellerInfoResponse.sellerNumber})
                </span>
              </div>
            </li>
            <li>
              <div>
                <span>시작하기</span>
              </div>
              <div>
                <OnOffIcon width={44} height={22} />
              </div>
            </li>
            <li>
              <div>
                <span>노출 상품수</span>
              </div>
              <div>
                <span>{mockSellerInfoResponse.sellerProducts.length}개</span>
              </div>
            </li>
            <li className="sidebar__point">
              <div>
                <span className="sidebar__point--icon">
                  <PointIcon />
                </span>
                <span>포인트</span>
              </div>
              <div>
                <span>{mockSellerInfoResponse.sellerPoint}P</span>
              </div>
            </li>
          </>
        )}
      </StyledSidebarHeader>
    </>
  )
}

const StyledSidebarHeader = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.padding100};
    box-sizing: border-box;
    border-radius: 1px solid ${({ theme }) => theme.color.white300};
    border-bottom: 1px solid ${({ theme }) => theme.color.white300};
    width: 100%;
    height: 40px;
  }

  .sidebar__header {
    height: 48px;

    .sidebar__header--bizText {
      font-family: 'SpoqaHanSansB';
      color: ${({ theme }) => theme.color.primary100};
    }
  }

  .sidebar__profile {
    background-color: ${({ theme }) => theme.color.black200};
  }

  .sidebar__point {
    background: ${({ theme }) => theme.color.gradient100};
    font-family: 'SpoqaHanSansM';
    cursor: pointer;
    height: 48px;

    & > div {
      display: flex;
      align-items: center;
    }

    .sidebar__point--icon {
      margin-right: ${({ theme }) => theme.spacing.margin000};
    }
  }
`

//TODO: window.innerWidth값은 계속 트랙킹되니, 이에 따라 <DesktopSidebar>, <TabletSidebar>, <MobileSidebar> 컴포넌트를 렌더링하는 방식으로 수정 필요
const Sidebar = ({ sidebarData }: SidebarProps) => {
  const windowWidth = useWindowWidth()

  return (
    <StyledSidebar className="generallayout__sidebar">
      <SidebarHeader windowWidth={windowWidth} />
      <ul>
        {sidebarData.map((sidebarListItem, index) => (
          <SidebarItem key={index} {...sidebarListItem} />
        ))}
      </ul>
    </StyledSidebar>
  )
}

export default Sidebar
