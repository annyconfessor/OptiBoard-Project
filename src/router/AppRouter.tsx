import { Routes as Router, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'

const AppRouter = () => {
  return(
    <Router>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Router>
  )
}

export default AppRouter
