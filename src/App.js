import { Routes, Route } from "react-router-dom";
import Main from "./main";
import AboutUs from "./pages/AboutUs";
import Categories from "./pages/showTemp";
import Login from "./pages/LogIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/profile" element={<Login />} />
    </Routes>
  );
}

export default App;
