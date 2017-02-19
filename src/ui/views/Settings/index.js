import React from "react"
import classnames from "classnames/bind"
import Select from "../../comps/Select"
import Toggle from "../../comps/Toggle"
import style from "./style.less"

const cx = classnames.bind(style)

const Settings = props => {
  return (
    <div className={cx("container")}>
      <Select
        onChange={props.setMultiChoice}
        value={props.multichoice}
        options={{
          "Text entry": false,
          "Multiple choice": true
        }}>
        Answer mode
      </Select>
      <Toggle
        onChange={props.setWaitForEnter}
        value={props.waitForEnter}>
        waitForEnter
      </Toggle>
      <Toggle
        onChange={props.setClearAnswerAfterFailure}
        value={props.clearAnswerAfterFailure}>
        clearAnswerAfterFailure
      </Toggle>
      <Toggle
        onChange={props.setRetryAfterFailure}
        value={props.retryAfterFailure}>
        retryAfterFailure
      </Toggle>
    </div>
  )
}

Settings.displayName = "UI/views/Settings"

export default Settings
