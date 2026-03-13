import Card from "./components/Card"
import First from "./components/First"
import "./App.css"
import Menubar from "./components/Menubar"
import Footer from "./components/Footer"
import { Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"
import Refeg from "./components/Refeg"
export default function App()
{
  return(
    <>
    <Menubar></Menubar>
    <div className="Content">
<Routes>
  <Route path="/" element={<Home></Home>}></Route>
  <Route path="about" element={<About></About>}></Route>
  <Route path="/contact" element={<Contact></Contact>}></Route>
  <Route path="/gallery" element={<Gallery></Gallery>}></Route>
  <Route path="/Refeg" element={<Refeg></Refeg>}></Route>
</Routes>
    </div>

<Footer></Footer>
    {/* <First uname = "Ron" contact="848456454"></First>
    <h1>Welcome to React </h1>
    <First uname="Maria" contact="7897897897"></First>
    <First uname="Sam" contact="8897897897"></First> */}
</>
  )
}