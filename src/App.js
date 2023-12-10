import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import NavBarLogin from "./component/Utility/NavBarLogin";
import Footer from "./component/Utility/Footer";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AllCategoryPage from "./pages/Category/AllCategoryPage";
import AllBrandPage from "./pages/Brands/AllBrandPage";
import ShopProductPage from "./pages/Products/ShopProductPage";

function App() {
  return (
    <div className="font" >
      <NavBarLogin />
      <BrowserRouter basename="ecommerce-project">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/allproducts" element={<ShopProductPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
