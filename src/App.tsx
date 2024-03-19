import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout";
import Editor from "./pages/Editor";
import About from "./pages/About";
import Guide from "./pages/Guide";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/guide-to-read" element={<Guide />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
      <Route path="/editor" element={<Editor />}></Route>
    </Routes>
  )
}

export default App;