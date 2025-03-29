import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart"; 
import Mobiles from "./pages/Mobiles";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/Mobiles" element={<Mobiles />} /> 
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
