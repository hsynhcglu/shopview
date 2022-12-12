import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminHome from "./admin/AdminHome";
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Shops from "./Pages/Shops";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/admin/*" element={<AdminHome />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;