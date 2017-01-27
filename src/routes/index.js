import React from "react"
import { Route, IndexRedirect } from "react-router"
import App from "../containers/App"
import Select from "../containers/Select"
import Practice from "../containers/Practice"
import Report from "../containers/Report"
import Settings from "../containers/Settings"

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/select"/>
    <Route path="/select" component={Select}/>
    <Route path="/practice" component={Practice}/>
    <Route path="/report" component={Report}/>
    <Route path="/settings" component={Settings}/>
  </Route>
)
