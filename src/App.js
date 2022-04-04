import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
class App extends Component {
  
  render() {
    const userLogin = window.localStorage.getItem('user') ? true : false;
    console.log('userLogin', userLogin)
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar user={userLogin} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            {!userLogin ? <Route path="/login" component={Login} /> : null}
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}
export default App;
