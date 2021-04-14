// import logo from './logo.svg';
// import './App.css';
import './assets/css/dist/tailwind.css';
import React, {useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import RegisterUser from './pages/users/RegisterUser';
import LoginUser from './pages/users/LoginUser';
import ForgotPassword from './pages/users/ForgotPassword';
import CreatePost from './pages/posts/CreatePost';
import ListPost from './pages/posts/ListPost';
import EditPost from './pages/posts/EditPost';
import ListAllPost from './pages/posts/ListAllPost';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const Auth = (props) => {
  const params = new URLSearchParams(props.location.search);
  const token = params.get('token');
  if (token) {
    cookies.set("ppe-training-fe-token", token, {
      path: "/",
      expires: new Date(Date.now() + 25920000000),
    });
    window.location.assign('/ListPost')
    return <></>
  }
  window.location.assign('/RegisterUser')
  return <></>
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={'/ListAllPost'}
          component={ListAllPost}
        />
        <Route
          exact
          path={'/EditPost/:post_id'}
          component={EditPost}
        />
        <Route
          exact
          path={'/CreatePost'}
          component={CreatePost}
        />
        <Route
          exact
          path={'/ListPost'}
          component={ListPost}
        />
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
          path={'/ForgotPassword'}
          component={ForgotPassword}
        />
        <Route
          exact
          path={'/'}
          render={() => <Redirect to="/RegisterUser" />}
        />
        <Route exact path={"/Auth"} component={Auth} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
