import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

import { Provider } from './context';

import NavBar from './components/layout/Navbar'
import Home from './components/layout/Home'
import Bottleview from './components/pages/Bottleview'
import Bottleform from  './components/pages/Bottleform'

import Form, {
	FormThemeProvider,
  } from "react-standalone-form";

function App() {
  return (
    <FormThemeProvider>
    <Provider>
      <Router>
        <div className="App">
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/form" component={Bottleform} />
            <Route path="/page/bottleview/:id" component={Bottleview}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  </FormThemeProvider>
  )
}

export default App;
