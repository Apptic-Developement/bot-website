import { Outlet } from 'react-router-dom'
import NavBar from '../components/Headers/NavBar'
import AuthProvider from './contexts/authContext';
const App = () => {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Outlet />
      </AuthProvider>
    </>
  )
}
export default App;