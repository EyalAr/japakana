import React from "react"
import { Link } from "react-router"
import classnames from "classnames/bind"
import style from "./style.less"

const cx = classnames.bind(style)

const App = props => {
  return (
    <div className={cx("container")}>
      <div className={cx("title")}>
        Japakana!
      </div>
      <div className={cx("menu")}>
        <span className={cx("menuItem")}><Link to="/select"><i className="material-icons">view_module</i><span className={cx("caption")}>Select</span></Link></span>
        <span className={cx("menuItem")}><Link to="/practice"><i className="material-icons">play_circle_filled</i><span className={cx("caption")}>Practice</span></Link></span>
        <span className={cx("menuItem")}><Link to="/report"><i className="material-icons">assessment</i><span className={cx("caption")}>Report</span></Link></span>
        <span className={cx("menuItem")}><Link to="/settings"><i className="material-icons">build</i><span className={cx("caption")}>Settings</span></Link></span>
      </div>
      <div className={cx("body")}>
        {props.children}
      </div>
    </div>
  )
}

App.displayName = "UI/views/App"

export default App
