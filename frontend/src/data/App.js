
import "./App.css"
import Home from "./Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddWhales from "./Pages/AddWhales"
import EditWhale from "./Pages/EditWhale"
function App() {
  return (
    <div className='w-full '>
     <Router>
      <Routes>
        <Route path="/" exact  element={<Home/>}/>
        {/* <Route path="add-whales" element={<AddWhales/>}/> */}
        <Route path='/details/:id' element={<EditWhale />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App
