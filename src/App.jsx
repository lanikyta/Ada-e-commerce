import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ShopLayout } from './components/layout/ShopLayout'
import './App.css'
import { Home } from './pages/Home/Home'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { Profile } from './pages/Profile/Profile'
function App() {
  return (
    <BrowserRouter>
      <ShopLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ShopLayout>
    </BrowserRouter>
  )
}

export default App
