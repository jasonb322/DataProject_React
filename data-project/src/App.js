import Home from "./components/Home";
import TideWatch from "./components/Tide-WatchFiles/TideWatch";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/tideWatch">
            <TideWatch />
          </Route>

        </Switch>

      </div>
    </Router>

  );
}

export default App;
