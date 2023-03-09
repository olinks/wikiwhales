
import "./App.css"
import Home from "./Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddWhales from "./Pages/AddWhales"
function App() {
  return (
    <div className='w-full '>
     <Router>
      <Routes>
        <Route path="/" exact  element={<Home/>}/>
        <Route path="add-whales" element={<AddWhales/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App
