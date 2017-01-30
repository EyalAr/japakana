import React from "react"
import classnames from "classnames/bind"
import style from "./style.less"

const cx = classnames.bind(style)

const Entry = props => {
  return (
    props.entry.empty ?
      <div className={cx("container")}></div> :
      <div className={cx("container")}>
        <div className={cx("hiragana")}>
          { props.entry.hiragana }
        </div>
        <div className={cx("katakana")}>
          { props.entry.katakana }
        </div>
        <div className={cx("romaji")}>
          { props.entry.romaji }
        </div>
      </div>
  )
}

Entry.displayName = "UI/comps/Entry"

export default Entry
