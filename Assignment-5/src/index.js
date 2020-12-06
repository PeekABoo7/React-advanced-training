import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import store from './store';
import Home from './home';
import BugTracker from './bugTracker';
import Projects from './projects';
import Timer from './timer';

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <h1>My App</h1>
          <Timer />
          <br/>
          <div>
            <span> [ <Link to="/">Home</Link> ] </span>
            <span> [ <Link to="/bugs">Bugs</Link> ] </span>
            <span> [ <Link to="/projects">Projects</Link> ] </span>
          </div>
          <hr/>
          <Switch>
            <Route path="/bugs">
              <BugTracker/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//ES6 Modules Examples

/* 
import * as calculator from './calc';
console.log(calculator); 
*/

/* 
import * as calculator from "./calc";
//const add = calculator.add;
const { add } = calculator;
console.log(add(10,20)); 
*/

/* 
import { add } from "./calc";
console.log(add(10, 20)); 
*/

//importing the default exported entity
/* import calculator from './calc';
console.log(calculator);
 */

//importing the default exported and regular exported entities together
//import calculator, { add } from './calc';
