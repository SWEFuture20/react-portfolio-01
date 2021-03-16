import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterArea from './components/Footer/FooterArea'
import HeaderAbove from './pages/Header'
import Body from './components/Project/Body'
import Header from './components/Project/Header'

function App() {
  return (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
        <HeaderAbove />
        <Body />
        <Header />
        <FooterArea />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
