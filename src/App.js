import { Link, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";


function App() {
  
  return (
    <div className="App" style={{ padding: "60px" }}>
      <nav>
        <span><Link to="/">Home page</Link></span>
        <span><Link to="/contact">Contact page</Link></span>
        <span><Link to="/reviews">Reviews page</Link></span>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/reviews" element={<Reviews/>} />
      </Routes>
    </div>
  )
}

export default App;