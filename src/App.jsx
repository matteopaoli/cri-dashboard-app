import React from 'react'
import './App.css'
import Login from './pages/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import { CssBaseline } from '@material-ui/core'

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/admin" exact component={Admin} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
