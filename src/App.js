import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import WebsiteRoute from './Router-website'
import AdminRoute from './Router-admin'
import NoMatchPage from './404'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Switch>
              <Route path="/" exact component={WebsiteRoute}/>
              <Route path="/admin" component={AdminRoute}/>
              <Route component={NoMatchPage} />
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
