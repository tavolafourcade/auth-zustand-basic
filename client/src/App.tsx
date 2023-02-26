import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import ProtectedRoute from './components/ProtectedRoute';
import { useAuthStore } from './store/auth';

function App() {

  const isAuth = useAuthStore(state => state.isAuth)
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute isAllowed={isAuth}/>}>
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="/dashboard" element={<ProfilePage/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
