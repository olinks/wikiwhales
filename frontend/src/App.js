
import "./App.css"
import Home from "./Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddWhales from "./Pages/AddWhales"
import EditWhale from "./Pages/EditWhale"
import Datatables from "./components/MyDatatable"

function App() {
  return (
    <div className=' '>
     <Router>
      <Routes>
        <Route path="/" exact  element={<Home/>}/>
        <Route path="add-whales" element={<AddWhales/>}/>
        <Route path='/details/:id' element={<EditWhale />} />
        <Route path='/datatable' element={<Datatables />} />
      </Routes>
     </Router>

    
    </div>
  )
}

export default App
