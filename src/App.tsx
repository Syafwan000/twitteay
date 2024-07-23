import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@pages/Layout'
import About from '@pages/About'
import Home from '@pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
