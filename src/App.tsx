import Generator from '@pages/Generator'
import Layout from '@/components/layout/Layout'
import About from '@pages/About'
import Home from '@pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter future={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
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
