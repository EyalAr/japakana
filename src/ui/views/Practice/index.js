import React from "react"
import classnames from "classnames/bind"
import Entry from "../../comps/Entry"
import style from "./style.less"

const cx = classnames.bind(style)

const Practice = props => {
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        { props.entry && <Entry
          entry={props.entry}
          showHiragana={props.showHiragana}
          showKatakana={props.showKatakana}
          selected={false}
          toggle={() => {}}/> }
      </div>
    </div>
  )
}

Practice.displayName = "UI/views/Practice"

export default Practice
