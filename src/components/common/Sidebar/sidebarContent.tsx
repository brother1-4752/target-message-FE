import React from 'react'
import { HomeIcon } from '../Icons/Icons'

//TODO: 로그인시 유저가 어떤 유형인지 LS에 {userType : "S" | "A"} 저장
const mockSellerName = '애쉬셀러(2333)' // S
const mockSellerPdCount = 10
const mockSellerPoint = 1502984
const mockAdminName = '김형일(Admin)' // A

interface SellerInfoResponse {
  sellerId: string
  sellerNumber: string
  sellerName: string
  sellerPoint: string
  sellerProducts: Product[]
}

interface AdminInfoResponse {
  adminId: string
  amdinName: string
}

type UserInfoResponse = SellerInfoResponse | AdminInfoResponse

interface Product {
  product_id: string
  product_name: string
  price: string
  is_sell: string
  img_url: string
}

const mockSellerInfoResponse: SellerInfoResponse = {
  sellerId: 's_1', // pk
  sellerName: 'nosnos', // 판매자명
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

const mockAdminInfoResponse: AdminInfoResponse = {
  adminId: 'a_1',
  amdinName: '나나나 관리자',
}

//TODO: id부여해서 인덱스로 접근하게끔 해야 했나?
export interface SidebarData {
  label: string
  isprofile?: boolean
  path?: string
  icon?: React.ReactNode
  hasOnOff?: boolean
  description?: string
  children?: SidebarData[]
  hasHover?: boolean
  depth?: number
}

//TODO: path 절대경로를 상대경로로 바꿔야 함
export const sellerSidebarData: SidebarData[] = [
  {
    label: mockSellerName,
    icon: <HomeIcon />,
    isprofile: true,
  },
  {
    label: '시작하기',
    hasOnOff: true, // on off 스위치
  },
  {
    label: '노출 상품수',
    description: `${mockSellerPdCount} 개`,
  },
  {
    label: '포인트',
    // path: '/biz-center/point',
    path: '/',
    icon: <HomeIcon />,
    description: `${mockSellerPoint} P`,
  },
  {
    label: '발송 예약 CRM',
    icon: <HomeIcon />,
    hasHover: true,
    children: [
      {
        label: '비즈엠',
        path: '/biz-center/bizm/:sellerNo',
        hasHover: true,
        depth: 2,
      },
      {
        label: '앱푸시',
        path: '/biz-center/app-push/:sellerNo',
        hasHover: true,
        depth: 2,
      },
    ],
  },
  {
    label: '공지사항',
    // path: '/biz-center/notice',
    path: '/',
    hasHover: true,
    icon: <HomeIcon />,
  },
  {
    label: '광고관리',
    // path: '/biz-center/ad',
    path: '/',
    hasHover: true,
    icon: <HomeIcon />,
  },
  {
    label: '광고성과 보고서',
    path: '/biz-center/ad-report',
    hasHover: true,
    icon: <HomeIcon />,
  },
  {
    hasHover: true,
    label: '포인트 관리',
    icon: <HomeIcon />,
    children: [
      {
        label: '비즈 포인트 관리',
        hasHover: true,
        depth: 2,
        children: [
          {
            label: '포인트 충전(테스트)',
            path: '/biz-center/point/charge',
            icon: <HomeIcon />,
            hasHover: true,
            depth: 3,
          },
        ],
      },
      {
        label: '포인트 충전 내역',
        path: '/biz-center/point/charge-history',
        hasHover: true,
        depth: 2,
      },
    ],
  },
  {
    label: '단독 구좌 광고',
    path: '/biz-center/special-area-ad',
    hasHover: true,
    icon: <HomeIcon />,
  },
  {
    hasHover: true,
    label: '미디어 믹스 광고',
    icon: <HomeIcon />,
    children: [
      {
        label: '미디어 믹스 광고상품',
        path: '/biz-center/media-mix/ad',
        hasHover: true,
        depth: 2,
      },
      {
        label: '미디어 믹스 광고성과',
        path: '/biz-center/media-mix/report',
        hasHover: true,
        depth: 2,
      },
    ],
  },
  {
    label: '리뷰 체험단 광고',
    path: '/biz-center/review-ad',
    hasHover: true,
    icon: <HomeIcon />,
  },
  {
    hasHover: true,
    label: '마이페이지',
    icon: <HomeIcon />,
    children: [
      {
        label: '스토어 정보 변경',
        path: '/biz-center/store-info',
        hasHover: true,
        depth: 2,
      },
      {
        label: '대행사 연동 정보',
        path: '/biz-center/agency-info',
        hasHover: true,
        depth: 2,
      },
      {
        label: '광고 약정서',
        path: '/biz-center/ad-contract',
        hasHover: true,
        depth: 2,
      },
    ],
  },
  {
    label: '자주하는 질문',
    path: '/biz-center/faq',
    hasHover: true,
    icon: <HomeIcon />,
  },
  {
    label: '튜토리얼',
    path: '/biz-center/tutorial',
    hasHover: true,
    icon: <HomeIcon />,
  },
]

export const adminSidebarData: SidebarData[] = [
  {
    label: mockAdminName,
    isprofile: true,
    icon: <HomeIcon />,
  },
  {
    label: '공지사항',
    path: '/biz-center/notice',
    hasHover: true,
    icon: <HomeIcon />,
  },
  {
    label: '발송 예약 CRM',
    icon: <HomeIcon />,
    hasHover: true,
    children: [
      {
        label: '비즈엠',
        path: '/biz-center/bizm/admin',
        hasHover: true,
        depth: 2,
      },
      {
        label: '앱푸시',
        path: '/biz-center/app-push/admin',
        hasHover: true,
        depth: 2,
      },
    ],
  },
  {
    label: '모니터링',
    icon: <HomeIcon />,
    hasHover: true,
    children: [
      {
        label: '상품 조회',
        path: '/biz-center/monitoring/product',
        hasHover: true,
        depth: 2,
      },
    ],
  },
  {
    label: '광고 정산 관리',
    path: '/biz-center/ad-settlement',
    hasHover: true,
    icon: <HomeIcon />,
  },
  {
    label: '소재검수 관리',
    hasHover: true,
    icon: <HomeIcon />,
    children: [
      {
        label: '소재검수',
        path: '/biz-center/creative-inspection',
        hasHover: true,
        depth: 2,
      },
    ],
  },
  {
    label: '환불 관리',
    path: '/biz-center/refund',
    hasHover: true,
    icon: <HomeIcon />,
  },
  {
    label: '단독 구좌 관리',
    hasHover: true,
    icon: <HomeIcon />,
    children: [
      {
        label: '단독 구좌 상품',
        path: '/biz-center/special-area/product',
        hasHover: true,
        depth: 2,
      },
    ],
  },
  {
    label: '미디어 믹스 관리',
    icon: <HomeIcon />,
    hasHover: true,
    children: [
      {
        label: '미디어 믹스 애드셋',
        path: '/biz-center/media-mix/adset',
        hasHover: true,
        depth: 2,
      },
      {
        label: '미디어 믹스 구매내역',
        path: '/biz-center/media-mix/purchase-history',
        hasHover: true,
        depth: 2,
      },
    ],
  },
  {
    label: '관리자 계정 관리',
    path: '/biz-center/admin-profile',
    hasHover: true,
    icon: <HomeIcon />,
  },
  {
    label: '비즈센터 설정',
    path: '/biz-center/bizcenter-settings',
    hasHover: true,
    icon: <HomeIcon />,
  },
  {
    label: '비즈센터 설정',
    path: '/biz-center/bizcenter-settings',
    hasHover: true,
    icon: <HomeIcon />,
  },
  {
    label: '자주하는 질문',
    path: '/biz-center/faq',
    hasHover: true,
    icon: <HomeIcon />,
  },
  {
    label: '튜토리얼',
    path: '/biz-center/tutorial',
    hasHover: true,
    icon: <HomeIcon />,
  },
]
