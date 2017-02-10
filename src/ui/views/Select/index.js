import React from "react"
import classnames from "classnames/bind"
import mainKana from "../../../lib/kana"
import dakuten from "../../../lib/kana/dakuten"
import handakuten from "../../../lib/kana/handakuten"
import Entry from "../../comps/Entry"
import style from "./style.less"

const cx = classnames.bind(style)

const Select = props => {
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <div className={cx("mainKanaContainer")}>
          { props.mainColsSelectedRatios.map((r, i) => (
            <div
              key={"col-" + i}
              className={cx("colSelector")}
              onClick={() => props.toggleMainCol(i)}>
                <i className="material-icons">{
                  r === 1 ? "check_box" :
                  r === 0 ? "check_box_outline_blank" :
                  "indeterminate_check_box"
                }</i></div>
          )) }
          { mainKana.map((e, row, col, i) => (
            <Entry
              key={i}
              entry={e}
              showHiragana={props.showHiragana}
              showKatakana={props.showKatakana}
              showRomaji={true}
              selected={props.selectedMain.indexOf(i) !== -1}
              toggle={() => props.toggleMain(row, col)}/>
          )).vals }
        </div>
        <div className={cx("dakutenContainer")}>
          { props.dakutenColsSelectedRatios.map((r, i) => (
            <div
              key={"col-" + i}
              className={cx("colSelector")}
              onClick={() => props.toggleDakutenCol(i)}>
                <i className="material-icons">{
                  r === 1 ? "check_box" :
                  r === 0 ? "check_box_outline_blank" :
                  "indeterminate_check_box"
                }</i></div>
          )) }
          { dakuten.map((e, row, col, i) => (
            <Entry
              key={i}
              entry={e}
              showHiragana={props.showHiragana}
              showKatakana={props.showKatakana}
              showRomaji={true}
              selected={props.selectedDakuten.indexOf(i) !== -1}
              toggle={() => props.toggleDakuten(row, col)}/>
          )).vals }
        </div>
        <div className={cx("handakutenContainer")}>
          { props.handakutenColsSelectedRatios.map((r, i) => (
            <div
              key={"col-" + i}
              className={cx("colSelector")}
              onClick={() => props.toggleHandakutenCol(i)}>
                <i className="material-icons">{
                  r === 1 ? "check_box" :
                  r === 0 ? "check_box_outline_blank" :
                  "indeterminate_check_box"
                }</i></div>
          )) }
          { handakuten.map((e, row, col, i) => (
            <Entry
              key={i}
              entry={e}
              showHiragana={props.showHiragana}
              showKatakana={props.showKatakana}
              showRomaji={true}
              selected={props.selectedHandakuten.indexOf(i) !== -1}
              toggle={() => props.toggleHandakuten(row, col)}/>
          )).vals }
        </div>
      </div>
    </div>
  )
}

Select.displayName = "UI/views/Select"

export default Select
