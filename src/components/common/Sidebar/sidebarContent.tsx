import React from 'react'
import { HomeIcon } from '../Icons/Icons'

//TODO: id부여해서 인덱스로 접근하게끔 해야 했나?
export interface SidebarData {
  label: string
  path?: string
  icon?: React.ReactNode
  children?: SidebarData[]
}

export const sellerSidebarData: SidebarData[] = [
  {
    label: '발송 예약 CRM',
    icon: <HomeIcon />,
    children: [
      {
        label: '비즈엠',
        path: '/biz-center/bizm/:sellerNo',
      },
      {
        label: '앱푸시',
        path: '/biz-center/app-push/:sellerNo',
      },
    ],
  },
  {
    label: '공지사항',
    // path: '/biz-center/notice',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    label: '광고관리',
    // path: '/biz-center/ad',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    label: '광고성과 보고서',
    path: '/biz-center/ad-report',
    icon: <HomeIcon />,
  },
  {
    label: '포인트 관리',
    icon: <HomeIcon />,
    children: [
      {
        label: '비즈 포인트 관리',

        children: [
          {
            label: '포인트 충전(테스트)',
            path: '/biz-center/point/charge',
            icon: <HomeIcon />,
          },
        ],
      },
      {
        label: '포인트 충전 내역',
        path: '/biz-center/point/charge-history',
      },
    ],
  },
  {
    label: '단독 구좌 광고',
    path: '/biz-center/special-area-ad',
    icon: <HomeIcon />,
  },
  {
    label: '미디어 믹스 광고',
    icon: <HomeIcon />,
    children: [
      {
        label: '미디어 믹스 광고상품',
        path: '/biz-center/media-mix/ad',
      },
      {
        label: '미디어 믹스 광고성과',
        path: '/biz-center/media-mix/report',
      },
    ],
  },
  {
    label: '리뷰 체험단 광고',
    path: '/biz-center/review-ad',
    icon: <HomeIcon />,
  },
  {
    label: '마이페이지',
    icon: <HomeIcon />,
    children: [
      {
        label: '스토어 정보 변경',
        path: '/biz-center/store-info',
      },
      {
        label: '대행사 연동 정보',
        path: '/biz-center/agency-info',
      },
      {
        label: '광고 약정서',
        path: '/biz-center/ad-contract',
      },
    ],
  },
  {
    label: '자주하는 질문',
    path: '/biz-center/faq',
    icon: <HomeIcon />,
  },
  {
    label: '튜토리얼',
    path: '/biz-center/tutorial',
    icon: <HomeIcon />,
  },
]

export const adminSidebarData: SidebarData[] = [
  {
    label: '어드민이당',
    icon: <HomeIcon />,
  },
  {
    label: '공지사항',
    path: '/biz-center/notice',
    icon: <HomeIcon />,
  },
  {
    label: '발송 예약 CRM',
    icon: <HomeIcon />,
    children: [
      {
        label: '비즈엠',
        path: '/biz-center/bizm/admin',
      },
      {
        label: '앱푸시',
        path: '/biz-center/app-push/admin',
      },
    ],
  },
  {
    label: '모니터링',
    icon: <HomeIcon />,
    children: [
      {
        label: '상품 조회',
        path: '/biz-center/monitoring/product',
      },
    ],
  },
  {
    label: '광고 정산 관리',
    path: '/biz-center/ad-settlement',
    icon: <HomeIcon />,
  },
  {
    label: '소재검수 관리',
    icon: <HomeIcon />,
    children: [
      {
        label: '소재검수',
        path: '/biz-center/creative-inspection',
      },
    ],
  },
  {
    label: '환불 관리',
    path: '/biz-center/refund',
    icon: <HomeIcon />,
  },
  {
    label: '단독 구좌 관리',
    icon: <HomeIcon />,
    children: [
      {
        label: '단독 구좌 상품',
        path: '/biz-center/special-area/product',
      },
    ],
  },
  {
    label: '미디어 믹스 관리',
    icon: <HomeIcon />,
    children: [
      {
        label: '미디어 믹스 애드셋',
        path: '/biz-center/media-mix/adset',
      },
      {
        label: '미디어 믹스 구매내역',
        path: '/biz-center/media-mix/purchase-history',
      },
    ],
  },
  {
    label: '관리자 계정 관리',
    path: '/biz-center/admin-profile',
    icon: <HomeIcon />,
  },
  {
    label: '비즈센터 설정',
    path: '/biz-center/bizcenter-settings',
    icon: <HomeIcon />,
  },
  {
    label: '비즈센터 설정',
    path: '/biz-center/bizcenter-settings',
    icon: <HomeIcon />,
  },
  {
    label: '자주하는 질문',
    path: '/biz-center/faq',
    icon: <HomeIcon />,
  },
  {
    label: '튜토리얼',
    path: '/biz-center/tutorial',
    icon: <HomeIcon />,
  },
]
