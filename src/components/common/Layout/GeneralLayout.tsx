import { ComponentType, HTMLAttributes } from 'react'
import { StyledGeneralLayout } from './GeneralLayout.styled'
import Sidebar from '../Sidebar/Sidebar'
import { adminSidebarData, sellerSidebarData } from '../Sidebar/sidebarContent'
import Header from '../Header/Header'

interface GeneralLayoutProps<T> extends HTMLAttributes<T> {}

const USER_TYPE = 'SELLER'

const withGeneralLayout = <T extends GeneralLayoutProps<T>>(WrappedComponent: ComponentType<T>) => {
  const GeneralLayout: React.FC<T> = (GeneralLayoutProps) => {
    return (
      <StyledGeneralLayout className="generallayout__header">
        <Header />

        <main className="generallayout__main">
          <WrappedComponent {...GeneralLayoutProps} />
        </main>

        <Sidebar sidebarData={USER_TYPE === 'SELLER' ? sellerSidebarData : adminSidebarData} />
      </StyledGeneralLayout>
    )
  }
  return GeneralLayout
}

export default withGeneralLayout
