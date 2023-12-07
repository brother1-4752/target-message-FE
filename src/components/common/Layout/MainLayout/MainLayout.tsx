import { HomeIcon } from '../../Icons/Icons'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <div>
        <span>
          <HomeIcon />
        </span>
        <span>발송예약 | 비즈엠</span>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
