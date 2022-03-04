import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Navbar from './components/Navbar';
//import Header from './components/Header'
import Home from './components/Home';

function App(props) {
  return (
    <div>
      <Home />
    </div>
    // <Router>
    //     <Route strict exact path="/" history={props.history}>
    //       <Navbar />
    //     </Route>
    // </Router>
  );
}

export default App;
