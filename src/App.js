
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Home from './Components/home/Home';
import Menu from './Components/menu/Menu';
import Navber from './Components/navber/Navber';
function App() {
  return (
    <div className="App">
      <Router>
       <Navber></Navber> 
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/menu">
          <Menu></Menu>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>

      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
