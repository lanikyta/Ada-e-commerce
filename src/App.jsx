import { Route, Routes } from 'react-router-dom'
import { ShopLayout } from './components/layout/ShopLayout'
import './App.css'
import { Home } from './pages/Home/Home'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { Profile } from './pages/Profile/Profile'
import { Checkout } from './pages/Checkout/Checkout'
import { NotFound } from './pages/NotFound/NotFound'
import { ProductCardDetails } from './pages/Details/ProductCardDetails'
import { Store } from './pages/Store/Store'
function App() {
  return (
    <ShopLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Store />}></Route>
        <Route path="/products/:id" element={<ProductCardDetails />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ShopLayout>
  )
}

export default App
