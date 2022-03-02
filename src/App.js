import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App(props) {
  return (
    <div>
      <Navbar />
    </div>
    // <Router>
    //     <Route strict exact path="/" history={props.history}>
    //       <Navbar />
    //     </Route>
    // </Router>
  );
}

export default App;
