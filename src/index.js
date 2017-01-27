import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
import injectTapEventPlugin from "react-tap-event-plugin";
import routes from "./routes"
import Root from "./containers/root"
import history from "./history"
import store from "./store"
import "./ui/reset.less"

injectTapEventPlugin()

ReactDOM.render(
  <Root routes={routes} history={history} store={store}/>,
  document.getElementById("app-root")
)
