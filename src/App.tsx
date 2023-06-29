import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home/Home'

function App() {

  return (
    <Router>  
        <Header />
        <GlobalStyles />

        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      
    </Router>
  )
}

export default App
