
import Login from "./components/Login";
import Tweet from "./components/tweet";
import { BrowserRouter as Switch, Route, Router } from 'react-router-dom';



function App() {
  return(

    <Router>
    <Switch>

<Route exact path="/login" component={Login} />

<Route exact path="/tweet" component={Tweet} />

    </Switch>
</Router>

  );
}

export default App;


