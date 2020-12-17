import React from "react"
import { Container } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


import Component from "./components/Component"

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/test">hello</Route>
          <Route path="/">
            <Component />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App
