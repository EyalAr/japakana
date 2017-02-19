import React from "react"
import classnames from "classnames/bind"
import style from "./style.less"

const cx = classnames.bind(style)

const Select = ({ children, value, onChange, options }) => {
  return (
    <div className={cx("container")}>
      {children}
      { Object.keys(options).map((label, i) => (
        <div key={i} className={cx("option")} onClick={() => onChange(options[label])}>
          <i className="material-icons">{
            options[label] === value ? "check_box" : "check_box_outline_blank"
          }</i> {label}
        </div>
      )) }
    </div>
  )
}

Select.displayName = "UI/comps/Select"

export default Select
