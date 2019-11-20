import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

import { Provider } from './context';

import NavBar from './components/Navbar/navbar.component'
import Home from './components/Home/Home.component'
import Bottleview from './pages/Bottleview/Bottleview'
import Bottleform from  './pages/Bottleform/Bottleform'

import Form, {
	FormThemeProvider,
  } from "react-standalone-form";

function App() {
  return (
    <FormThemeProvider>
    <Provider>
      <Router>
        <div>
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
