import { Routes as Router, Route } from 'react-router-dom'
import Home from '../pages/Home'

const AppRouter = () => {
  return(
    <Router>
      <Route path='/' element={<Home/>}></Route>
    </Router>
  )
}

export default AppRouter
