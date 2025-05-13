import { Routes as Router, Route, useNavigate } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const AppRouter = () => {
  const navigate = useNavigate()

  return(
    <Router>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/404' element={<NotFound/>}></Route>
    </Router>
  )
}

export default AppRouter

