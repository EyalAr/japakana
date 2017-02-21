import React from "react"
import chroma from "chroma-js"
import classnames from "classnames/bind"
import mainKana from "../../../lib/kana"
import dakuten from "../../../lib/kana/dakuten"
import handakuten from "../../../lib/kana/handakuten"
import Entry from "../../comps/Entry"
import style from "./style.less"

const cx = classnames.bind(style)
const colorScale = chroma.scale(["#e24040", "#89e240"])

const Select = props => {
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <div className={cx("mainKanaContainer")}>
          { mainKana.map((e, row, col, i) => {
            const history = props.history.entries[`main:${i}`] || {}
            const successCount = history.successCount
            const attemptsCount = history.attemptsCount
            return <Entry
              key={i}
              entry={e}
              showHiragana={props.showHiragana}
              showKatakana={props.showKatakana}
              showRomaji={true}
              background={attemptsCount ? colorScale(successCount / attemptsCount).hex() : null}
              selected={false}/>
          }).vals }
        </div>
        <div className={cx("dakutenContainer")}>
          { dakuten.map((e, row, col, i) => {
            const history = props.history.entries[`dakuten:${i}`] || {}
            const successCount = history.successCount
            const attemptsCount = history.attemptsCount
            return <Entry
              key={i}
              entry={e}
              showHiragana={props.showHiragana}
              showKatakana={props.showKatakana}
              showRomaji={true}
              background={attemptsCount ? colorScale(successCount / attemptsCount).hex() : null}
              selected={false}/>
          }).vals }
        </div>
        <div className={cx("handakutenContainer")}>
          { handakuten.map((e, row, col, i) => {
            const history = props.history.entries[`handakuten:${i}`] || {}
            const successCount = history.successCount
            const attemptsCount = history.attemptsCount
            return <Entry
              key={i}
              entry={e}
              showHiragana={props.showHiragana}
              showKatakana={props.showKatakana}
              showRomaji={true}
              background={attemptsCount ? colorScale(successCount / attemptsCount).hex() : null}
              selected={false}/>
          }).vals }
        </div>
      </div>
    </div>
  )
}

Select.displayName = "UI/views/Select"

export default Select
