import "./App.css"
import Home from "./Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import EditWhale from "./Pages/EditWhale"
// import Datatables from "./components/MyDatatable"

function App() {
  return (
    <div className=' '>

      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />

          <Route path='/details/:id' element={<EditWhale />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
