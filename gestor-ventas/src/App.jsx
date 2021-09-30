import 'styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import Index from 'pages/Index';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/registro'>
            <Registro/>
          </Route>
          <Route path='/'>
            <Index/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
