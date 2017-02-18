import React from "react"
import classnames from "classnames/bind"
import style from "./style.less"

const cx = classnames.bind(style)

const Entry = ({
  entry, selected, toggle, showHiragana,
  showKatakana, showRomaji, className
}) => {
  return (
    entry.empty ?
      <div className={cx("container", className)}>&nbsp;</div> :
      <div className={cx("container", "clickable", { selected }, className)} onClick={toggle}>
        <div className={cx("wrapper")}>
          <div className={cx("kana")}>
            { showHiragana &&
              <div className={cx("hiragana")}>
                { entry.hiragana }
              </div>
            }
            { showKatakana &&
              <div className={cx("katakana")}>
                { entry.katakana }
              </div>
            }
          </div>
          { showRomaji &&
            <div className={cx("romaji")}>
              { entry.romaji }
            </div>
          }
        </div>
      </div>
  )
}

Entry.displayName = "UI/comps/Entry"

export default Entry
