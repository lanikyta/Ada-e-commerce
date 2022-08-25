import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ShopLayout } from './components/layout/ShopLayout'
import './App.css'
import { Home } from './pages/Home/Home'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { Profile } from './pages/Profile/Profile'
import { Checkout } from './pages/Checkout/Checkout'
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
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ShopLayout>
    </BrowserRouter>
  )
}

export default App
