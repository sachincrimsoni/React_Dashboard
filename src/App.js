import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './website/Header'
import Footer from './website/Footer'
import NoMatchPage from './404'
import Home from './website/Home'
import About from './website/About'
import Contact from './website/Contact'
import Userdata from './website/Userdata'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/userdata" component={Userdata}/>
              <Route component={NoMatchPage} />
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
