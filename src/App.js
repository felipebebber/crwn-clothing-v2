import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';

import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import Category from './routes/category/category.component';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

const Footer = () => {
  return (
    <div>
      <hr />
      Footer Aqui
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="shop">
          <Route index element={<Shop />} />
          <Route path=":category" element={<Category />} />
        </Route>
        
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
};

export default App;