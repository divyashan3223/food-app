import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landingpage from "./pages/public/landingPage/page";
import Home from "./pages/portal/home/page";
import Login from "./pages/auth/login/page";
import FoodPage from "./pages/portal/food/page";
import MyCart from "./pages/portal/my cart/page";
// import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/cart" element={<MyCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
