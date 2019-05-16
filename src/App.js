import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
//import './node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';
import Login from './Container/Login/';
import MultipleChoice from './Container/MultipleChoice/';
import QandA from './Container/QandA/';
import ReferenceQandA from './Container/ReferenceQandA/';
import Home from './Container/Home/';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-content">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/multipleChoice" component={MultipleChoice} />
            <Route path="/qAndA" component={QandA} />
            <Route path="/referenceqandA" component={ReferenceQandA} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
