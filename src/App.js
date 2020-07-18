import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Header />
            <Banner />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
