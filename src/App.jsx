import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SocialFloating from "./components/SocialFloating";
import Home from "./page/Home";
import About from "./page/About";
import Products from "./page/Products";
import Restore from "./page/Restore";
import News from "./page/News";
import NewsDetail from "./page/NewsDetail"; // 👈 thêm dòng này
import Contact from "./page/Contact";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/restore" element={<Restore />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <SocialFloating />
    </Router>
  );
}

export default App;
