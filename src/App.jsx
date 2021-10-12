import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import AboutPage from './pages/AboutPage'
import DatabasePage from './pages/DatabasePage'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>   
          <Redirect exact path="/" to="/home" /> 
          <Route path="/home" component={LandingPage}/>
          <Route path="/database" component={DatabasePage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </Router>
    </>
  )
}

export default App