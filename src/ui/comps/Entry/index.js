import React from "react"
import classnames from "classnames/bind"
import style from "./style.less"

const cx = classnames.bind(style)

const Entry = ({ entry, selected, toggle }) => {
  return (
    entry.empty ?
      <div className={cx("container")}>&nbsp;</div> :
      <div className={cx("container", "clickable", { selected })} onClick={toggle}>
        <div className={cx("wrapper")}>
          <div className={cx("kana")}>
            <div className={cx("hiragana")}>
              { entry.hiragana }
            </div>
            <div className={cx("katakana")}>
              { entry.katakana }
            </div>
          </div>
          <div className={cx("romaji")}>
            { entry.romaji }
          </div>
        </div>
      </div>
  )
}

Entry.displayName = "UI/comps/Entry"

export default Entry
