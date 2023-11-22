import { ComponentType, HTMLAttributes } from 'react'
import { StyledGeneralLayout } from './GeneralLayout.styled'
import Sidebar from '../Sidebar/Sidebar'
import { sidebarData } from '../Sidebar/sidebarContent'

interface GeneralLayoutProps<T> extends HTMLAttributes<T> {}

const withGeneralLayout = <T extends GeneralLayoutProps<T>>(WrappedComponent: ComponentType<T>) => {
  const GeneralLayout: React.FC<T> = (GeneralLayoutProps) => {
    return (
      <StyledGeneralLayout>
        <header className="generallayout__header">헤더</header>

        <main className="generallayout__main">
          <WrappedComponent {...GeneralLayoutProps} />
        </main>

        <Sidebar sidebarData={sidebarData} />
        <footer className="generallayout__footer">푸터</footer>
      </StyledGeneralLayout>
    )
  }
  return GeneralLayout
}

export default withGeneralLayout
