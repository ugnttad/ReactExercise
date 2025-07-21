import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FoodList from "./components/Foods/FoodList";
import FoodDetail from "./components/Foods/FoodDetail";
import FoodManager from "./components/Foods/FoodManager";
import Cart from "./components/Cart/Cart";
import Login from "./components/Auth/Login";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg shadow-sm px-4 mb-4" style={{background:'#f6f3ee'}}>
            <div className="container-fluid">
              <Link className="navbar-brand site-title" to="/">Richie Restaurant</Link>
              <div className="collapse navbar-collapse justify-content-end">
                <ul className="navbar-nav gap-2">
                  <li className="nav-item"><Link className="nav-link" to="/">Trang chủ</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/cart">Giỏ hàng</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/manager">Quản lý món</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/login">Đăng nhập</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<FoodList />} />
            <Route path="/food/:id" element={<FoodDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/manager" element={<FoodManager />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <footer className="text-center py-4 mt-4 text-muted" style={{background:'#f6f3ee'}}>
            © 2025 Richie Restaurant. Crafted with <span style={{color:"#e34e35"}}></span> by Dat
          </footer>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}
export default App;
