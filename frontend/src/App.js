import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Contact from './components/Contact';
import Terms from './components/Terms';
import TopBar from './components/TopBar';
import Main from './components/Main';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <TopBar />

      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Terms} exact />
        <Route path="/" component={Main} exact />
        <Route path="/cart" component={Cart} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
