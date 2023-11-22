import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import BizMAdmin from './pages/BizM/BizMAdmin'
import BizMSeller from './pages/BizM/BizMSeller'
import ErrorBoundary from './pages/ErrorBoundary/ErrorBoundary'
import Home from './pages/Home/Home'

interface RouterData {
  path: string
  label: string
  element: React.ReactNode
  errorElement?: React.ReactNode
  children?: AccessRouterData[]
  withAuth?: boolean
}

interface SellerRouterData extends RouterData {}

interface AdminRouterData extends RouterData {
  withAuth: true
  isAdminPage?: boolean
}

type AccessRouterData = SellerRouterData | AdminRouterData

const routerData: AccessRouterData[] = [
  {
    path: '/',
    label: '홈',
    element: <Home />,
    errorElement: <ErrorBoundary />,
    withAuth: false,
  },
  {
    path: '/sign-in',
    label: '로그인',
    element: <SignIn />,
    errorElement: <ErrorBoundary />,
    withAuth: false,
  },
  {
    path: '/sign-up',
    label: '회원가입',
    element: <SignUp />,
    errorElement: <ErrorBoundary />,
    withAuth: false,
  },
  {
    path: '/biz-center',
    label: '비즈센터',
    element: <App />,
    errorElement: <ErrorBoundary />,
    withAuth: true,
    children: [
      {
        path: 'bizm/seller/:sellerNo',
        label: '카카오 비즈엠 셀러페이지',
        element: <BizMSeller />,
      },
      {
        path: 'bizm/admin',
        label: '카카오 비즈엠 어드민페이지',
        element: <BizMAdmin />,
        withAuth: true,
        isAdminPage: true,
      },
    ],
  },
]

const router = createBrowserRouter(
  routerData.map((router) => {
    const { path, element, errorElement, withAuth, children } = router

    if (children) {
      return {
        path,
        element,
        errorElement,
        children: children.map((child) => {
          const { path, element, errorElement, withAuth } = child

          return {
            path,
            element,
            errorElement,
            withAuth,
          }
        }),
      }
    }

    return {
      path,
      element,
      errorElement,
      withAuth,
    }
  })
)

export default router
