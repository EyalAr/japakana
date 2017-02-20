import React from "react"
import classnames from "classnames/bind"
import style from "./style.less"

const cx = classnames.bind(style)

const Select = ({ children, value, onChange, options, className }) => {
  return (
    <div className={cx("container", className)}>
      <span className={cx("title")}>{children}</span>
      { Object.keys(options).map((label, i) => (
        <span key={i} className={cx("option")} onClick={() => onChange(options[label])}>
          <i className="material-icons">{
            options[label] === value ? "check_box" : "check_box_outline_blank"
          }</i>{label}
        </span>
      )) }
    </div>
  )
}

Select.displayName = "UI/comps/Select"

export default Select
