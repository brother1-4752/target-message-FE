import React from 'react'
import { HomeIcon } from '../Icons/Icons'

//TODO: 로그인시 유저가 어떤 유형인지 LS에 {userType : "S" | "A"} 저장
const mockSellerName = '애쉬셀러(2333)' // S
const mockSellerPdCount = 10
const mockSellerPoint = 1502984
// const mockAdminName = '김형일(Admin)' // A

//TODO: id부여해서 인덱스로 접근하게끔 해야 했나?
interface SidebarData {
  label: string
  path?: string
  icon?: React.ReactNode
  hasOnOff?: boolean
  description?: string
  children?: AccessSidebarData[]
}

interface SellerSidebarData extends SidebarData {
  isPointData?: boolean
}
interface AdminSidebarData extends SidebarData {
  isAdminPage?: boolean
}

export type AccessSidebarData = SellerSidebarData | AdminSidebarData

//TODO: path 절대경로를 상대경로로 바꿔야 함
export const sidebarData: AccessSidebarData[] = [
  {
    label: mockSellerName,
    path: '/biz-center',
    icon: <HomeIcon />,
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
    path: '/biz-center',
    icon: <HomeIcon />,
    isPointData: true,
    description: `${mockSellerPoint} P`,
  },
  {
    label: '공지사항',
    // path: '/biz-center/notice',
    path: '/biz-center',
    icon: <HomeIcon />,
  },
  {
    label: '광고관리',
    // path: '/biz-center/ad',
    path: '/biz-center',
    icon: <HomeIcon />,
  },
  {
    label: '광고성과 보고서',
    // path: '/biz-center/ad-report',
    path: '/biz-center',
    icon: <HomeIcon />,
  },
  {
    label: '포인트 관리',
    // path: '/biz-center/point',
    path: '/biz-center',
    icon: <HomeIcon />,
  },
  {
    label: '단독 구좌 광고',
    // path: '/biz-center/special-area-ad',
    path: '/biz-center',
    icon: <HomeIcon />,
  },
  {
    label: '미디어 믹스 광고',
    icon: <HomeIcon />,
    children: [
      {
        label: '미디어 믹스 광고상품',
        path: '/biz-center/media-mix/ad',
        // path: '/biz-center',
      },
      {
        label: '미디어 믹스 광고성과',
        // path: '/biz-center/media-mix/report',
        path: '/biz-center',
      },
    ],
  },
  {
    label: '관리자 계정 관리',
    // path: '/biz-center/admin-profile',
    path: '/biz-center',
    isAdminPage: true,
  },
  {
    label: '비즈센터 설정',
    // path: '/biz-center/bizcenter-settings',
    path: '/biz-center',
    isAdminPage: true,
  },
  // {
  //   label: '마이페이지',
  //   icon: <HomeIcon />,
  //   children: [
  //     {
  //       label: '스토어 정보 변경',
  //       // path: '/biz-center/store-info',
  //       path: '/biz-center',
  //     },
  //     {
  //       label: '대행사 연동 정보',
  //       // path: '/biz-center/agency-info',
  //       path: '/biz-center',
  //     },
  //     {
  //       label: '광고 약정서',
  //       // path: '/biz-center/ad-contract',
  //       path: '/biz-center',
  //     },
  //   ],
  // },
  {
    label: '자주하는 질문',
    // path: '/biz-center/faq',
    path: '/biz-center',
    icon: <HomeIcon />,
  },
  {
    label: '튜토리얼',
    // path: '/biz-center/tutorial',
    path: '/biz-center',
    icon: <HomeIcon />,
  },
]
