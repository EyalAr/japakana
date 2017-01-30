import React from "react"
import { Link } from "react-router"
import classnames from "classnames/bind"
import style from "./style.less"

const cx = classnames.bind(style)

const App = props => {
  return (
    <div className={cx("container")}>
      <div className={cx("menu")}>
        <Link to="/select">Select</Link>
        <Link to="/practice">Practice</Link>
        <Link to="/report">Report</Link>
        <Link to="/settings">Settings</Link>
      </div>
      <div className={cx("body")}>
        {props.children}
      </div>
    </div>
  )
}

App.displayName = "UI/views/App"

export default App
