import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Generator from '@pages/Generator'
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
        <Route path="/create" element={<Generator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
