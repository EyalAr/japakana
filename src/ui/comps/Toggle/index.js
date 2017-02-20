import React from "react"
import classnames from "classnames/bind"
import style from "./style.less"

const cx = classnames.bind(style)

const Toggle = ({ children, value, onChange, className }) => {
  return (
    <div className={cx("container", className)} onClick={() => onChange(!value)}>
      <i className="material-icons">{
        value ? "check_box" : "check_box_outline_blank"
      }</i>
      {children}
    </div>
  )
}

Toggle.displayName = "UI/comps/Toggle"

export default Toggle
