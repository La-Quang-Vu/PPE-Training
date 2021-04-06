// import logo from './logo.svg';
// import './App.css';
import './assets/css/dist/tailwind.css';
import React, {useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import RegisterUser from './pages/users/RegisterUser';
import LoginUser from './pages/users/LoginUser';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={'/RegisterUser'}
          component={RegisterUser}
        />
        <Route
          exact
          path={'/LoginUser'}
          component={LoginUser}
        />
        <Route
          exact
          path={'/'}
          render={() => <Redirect to="/RegisterUser" />}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
