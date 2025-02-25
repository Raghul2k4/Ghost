import { Routes, Route } from "react-router-dom";
import NavBar from "./components/MainComponents/NavBar";
import Main from "./main";  // Corrected import
import AboutUs from "./pages/AboutUs";
import Categories from "./pages/showTemp";
// import Wishlist from "./pages/Wishlist";
// import Liked from "./pages/Liked";
import Login from "./pages/LogIn"

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Login/>} />
        {/* <Route path="/liked" element={<Liked />} /> */}
      </Routes>
    </>
  );
}

export default App;
