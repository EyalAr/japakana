import React from "react"
import { Link } from "react-router"
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
      <div className={cx("mainKanaContainer")}>
        { mainKana.map((e, row, col, key) => (
          <Entry key={key} entry={e}/>
        )) }
      </div>
      <div className={cx("dakutenContainer")}>
        { dakuten.map((e, row, col, key) => (
          <Entry key={key} entry={e}/>
        )) }
      </div>
      <div className={cx("handakutenContainer")}>
        { handakuten.map((e, row, col, key) => (
          <Entry key={key} entry={e}/>
        )) }
      </div>
    </div>
  )
}

Select.displayName = "UI/views/Select"

export default Select
