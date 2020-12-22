import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./login";
import List from "./list";

function App() {

  const isLoggedIn = true;

  return(
    <BrowserRouter>
      <Switch>{isLoggedIn ?
        <Route exact path="/" component={Login} />:
        <Route path="/list" component={List} />}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
