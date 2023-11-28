import { Outlet } from 'react-router-dom'
import withGeneralLayout from './components/common/Layout/GeneralLayout'

const App = withGeneralLayout(() => {
  return (
    <div>
      <Outlet />
    </div>
  )
})

export default App
