import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Adminheader from './admin/Header'
import Adminfooter from './admin/Footer'
import Login from './admin/Login'
import Adminhome from './admin/Home'
import Usertable from './admin/User'
import AddUser from './admin/Adduser'

function AdminRoute() {
  return (
    <BrowserRouter>
        <div className="App">
          <Adminheader/>
          <Switch>
              <Route path="/admin" component={Login}/>
              <Route path="/admin_home" component={Adminhome}/>
              <Route path="/admin_user_details" component={Usertable}/>
              <Route path="/admin_add_user" component={AddUser}/>
          </Switch>
          <Adminfooter/>
        </div>
    </BrowserRouter>
  );
}

export default AdminRoute;
