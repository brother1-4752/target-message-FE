import { Outlet } from 'react-router-dom'
import withGeneralLayout from './components/common/Layout/GeneralLayout'

const App = withGeneralLayout(() => {
  return (
    <div>
      <h1>비즈센터 | 홈</h1>

      <Outlet />
    </div>
  )
})

export default App
