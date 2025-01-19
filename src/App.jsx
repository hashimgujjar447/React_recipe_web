// import "./App.css";

import { Route, Routes } from "react-router-dom";

import Detail from "./pages/Detail/Detail";
import Favorite from "./pages/Favourite/Favorite";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/item-list/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
