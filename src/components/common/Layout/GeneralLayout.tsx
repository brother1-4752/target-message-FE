import { ComponentType, HTMLAttributes } from 'react'
import { StyledGeneralLayout } from './GeneralLayout.styled'
import Sidebar from '../Sidebar/Sidebar'
import { adminSidebarData, sellerSidebarData } from '../Sidebar/sidebarContent'

interface GeneralLayoutProps<T> extends HTMLAttributes<T> {}

const USER_TYPE = 'SELLER'

const withGeneralLayout = <T extends GeneralLayoutProps<T>>(WrappedComponent: ComponentType<T>) => {
  const GeneralLayout: React.FC<T> = (GeneralLayoutProps) => {
    return (
      <StyledGeneralLayout>
        <header className="generallayout__header">헤더</header>

        <main className="generallayout__main">
          <WrappedComponent {...GeneralLayoutProps} />
        </main>

        <Sidebar sidebarData={USER_TYPE === 'SELLER' ? sellerSidebarData : adminSidebarData} />
        <footer className="generallayout__footer">푸터</footer>
      </StyledGeneralLayout>
    )
  }
  return GeneralLayout
}

export default withGeneralLayout
