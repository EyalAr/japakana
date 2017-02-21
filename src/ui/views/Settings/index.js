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
        className={cx("setting")}
        onChange={props.setKanaMode}
        value={props.mode}
        options={{
          "Hiragana": "hiragana",
          "Katakana": "katakana",
          "Both": "both"
        }}>
        Kana mode:
      </Select>
      <Select
        className={cx("setting")}
        onChange={props.setMultiChoice}
        value={props.multichoice}
        options={{
          "Text entry": false,
          "Multiple choice": true
        }}>
        Answer mode:
      </Select>
      <Select
        className={cx("setting")}
        onChange={props.setTimer}
        value={props.timer}
        options={{
          "Disabled": false,
          "Fast": 2000,
          "Medium": 4000,
          "Slow": 6000
        }}>
        Countdown:
      </Select>
      <Toggle
        className={cx("setting")}
        onChange={props.setWaitForEnter}
        value={props.waitForEnter}>
        Press 'Enter' to submit
      </Toggle>
      <Toggle
        className={cx("setting")}
        onChange={props.setClearAnswerAfterFailure}
        value={props.clearAnswerAfterFailure}>
        Clear answer after failure
      </Toggle>
      <Toggle
        className={cx("setting")}
        onChange={props.setRetryAfterFailure}
        value={props.retryAfterFailure}>
        Retry after failure
      </Toggle>
      <Toggle
        className={cx("setting")}
        onChange={props.setAllowRevealAnswer}
        value={props.allowRevealAnswer}>
        Click to show/hide answer
      </Toggle>
      <Toggle
        className={cx("setting")}
        onChange={props.setAlwaysShowAnswer}
        value={props.alwaysShowAnswer}>
        Answer visible by default
      </Toggle>
      <Select
        className={cx("setting")}
        onChange={props.setSuccessDelay}
        value={props.successDelay}
        options={{
          "Short": 200,
          "Medium": 500,
          "Long": 1000
        }}>
        Delay after success:
      </Select>
      <Select
        className={cx("setting")}
        onChange={props.setFailureDelay}
        value={props.failureDelay}
        options={{
          "Short": 200,
          "Medium": 500,
          "Long": 1000
        }}>
        Delay after failure:
      </Select>
      <div className={cx("button")} onClick={props.clearHistory}><i className="material-icons">delete_sweep</i> Clear stats</div>
    </div>
  )
}

Settings.displayName = "UI/views/Settings"

export default Settings
