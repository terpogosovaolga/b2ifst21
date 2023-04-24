import logo from "./logo.svg";
import "./style/index.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// Функциональный компонент
function App() {
  // запрос к серверу
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<h1>Избранное</h1>} />
        <Route path="/cart" element={<h1>Корзина</h1>} />
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
