import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CarDetail from './pages/CarDetail'
import Error from './pages/Error'
import Cars from './pages/Cars'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='car' element={<Cars />} />
          <Route path='car/:carId' element={<CarDetail />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
