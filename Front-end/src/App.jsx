import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './structure/Home';
import Cart from './structure/cart/Cart';
import Singleproduct from './structure/Singleproduct';
import Checkout from './structure/Checkout';
import { AuthProvider } from './structure/hook/useAUth';
import PrivateRoute from './structure/PrivateRoute';
import { CartProvider } from './structure/cart/cartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart"  element={<Cart />} />
          <Route path="/product/:id" element={<Singleproduct />}  />
          <Route path="/checkout"  element={<PrivateRoute element={Checkout} />} />
        </Routes>
      </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
