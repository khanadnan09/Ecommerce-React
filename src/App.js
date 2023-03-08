import {BrowserRouter,Routes,Route} from "react-router-dom";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import SignUp from "./Pages/SignUp";
import WishList from "./Pages/WishList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/wishlist" element={<WishList/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
