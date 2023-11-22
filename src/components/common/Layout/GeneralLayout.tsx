import { ComponentType, HTMLAttributes } from 'react'
import { StyledGeneralLayout } from './GeneralLayout.styled'

interface GeneralLayoutProps<T> extends HTMLAttributes<T> {}

const withGeneralLayout = <T extends GeneralLayoutProps<T>>(WrappedComponent: ComponentType<T>) => {
  const GeneralLayout: React.FC<T> = (GeneralLayoutProps) => {
    return (
      <StyledGeneralLayout>
        <header className="generallayout__header">헤더</header>

        <main className="generallayout__main">
          <WrappedComponent {...GeneralLayoutProps} />
        </main>

        <div className="generallayout__sidebar">사이드바</div>
        <footer className="generallayout__footer">푸터</footer>
      </StyledGeneralLayout>
    )
  }
  return GeneralLayout
}

export default withGeneralLayout
