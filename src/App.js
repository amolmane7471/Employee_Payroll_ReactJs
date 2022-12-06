import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PayrollForm from './components/payroll-form/PayrollForm'
import Header from './components/Header';

function App() {
  return (
    <div >
      <Header/>
      <Router>
        <Switch>
          <Route path="/register"><PayrollForm/></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
