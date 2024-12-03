import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PageExample from "./pages/PageExample"

function App(){


  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/page2' element={<PageExample/>}/>
    </Routes>
    </>

  )

}

export default App


