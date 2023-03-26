import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import signin from "./Component/Signin";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Signin from "./Component/Signin";
import Foodlist from "./pages/Foodlist";
import Connect from "./pages/Connect";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/list" element={<Foodlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
