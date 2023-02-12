import Home from './routes/home/home.component'
import Navbar from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Home />} />
        <Route path='/contact' element={<Home />} />
        <Route path='/auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
