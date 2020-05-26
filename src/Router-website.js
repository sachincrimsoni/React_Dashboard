import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './website/Header'
import Footer from './website/Footer'
import Homepage from './website/Home'
import About from './website/About'
import Contact from './website/Contact'
import Userdata from './website/Userdata'

import AdminRoute from './Router-admin'

function WebsiteRoute() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header/>
              <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/userdata" component={Userdata}/>
                <Route path="/admin" component={AdminRoute}/>
              </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default WebsiteRoute;
