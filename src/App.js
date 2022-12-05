import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PayrollForm from './components/payroll-form/PayrollForm'
import Home from './components/home/Home';
import Header from './components/Header';

function App() {
  return (
    <div >
      <Header/>
      <Router>
        <Switch>
          <Route path="/register"><PayrollForm/></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
