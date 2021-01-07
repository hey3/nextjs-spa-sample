import { StrictMode } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'

const App = (): JSX.Element => (
  <StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  </StrictMode>
)

export default App
