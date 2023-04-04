import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./context/theme";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TopRated from "./components/TopRated";

function App() {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "bg-gray-700" : "bg-white";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-700";

  return (
    <Router>
      <div
        className={`${bgColor} ${textColor} transition-colors duration-300 min-h-screen select-none`}
      >
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/top-rated" element={<TopRated />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
