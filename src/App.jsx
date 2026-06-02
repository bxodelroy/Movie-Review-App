import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App