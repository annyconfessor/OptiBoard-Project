import AppRouter from "./router/AppRouter"
import { RouterContainer } from "./router"

const App = () => {
  return (
    <RouterContainer>
      <AppRouter />
    </RouterContainer>
  )
}

export default App