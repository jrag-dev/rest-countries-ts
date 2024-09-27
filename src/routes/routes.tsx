import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../layouts/Layout"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"


function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;