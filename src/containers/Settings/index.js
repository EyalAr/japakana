import { connect } from "react-redux"
import SettingsUI from "../../ui/views/Settings"
import setSettingsAction from "../../actions/setSettings"
import clearHistoryAction from "../../actions/clearHistory"

const mapStateToProps = (state, props) => {
  const data = state.data
  return data.get("settings").toJS()
}

const mapDispatchToProps = dispatch => {
  return {
    setMultiChoice: value => dispatch(setSettingsAction({
      "multichoice": value
    })),
    setWaitForEnter: value => dispatch(setSettingsAction({
      "waitForEnter": value
    })),
    setClearAnswerAfterFailure: value => dispatch(setSettingsAction({
      "clearAnswerAfterFailure": value
    })),
    setRetryAfterFailure: value => dispatch(setSettingsAction({
      "retryAfterFailure": value
    })),
    setKanaMode: value => dispatch(setSettingsAction({
      "mode": value
    })),
    setSuccessDelay: value => dispatch(setSettingsAction({
      "successDelay": value
    })),
    setFailureDelay: value => dispatch(setSettingsAction({
      "failureDelay": value
    })),
    setTimer: value => dispatch(setSettingsAction({
      "timer": value
    })),
    setAllowRevealAnswer: value => dispatch(setSettingsAction({
      "allowRevealAnswer": value
    })),
    setAlwaysShowAnswer: value => dispatch(setSettingsAction({
      "alwaysShowAnswer": value
    })),
    clearHistory: () => dispatch(clearHistoryAction())
  }
}

const Select = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsUI)

Select.displayName = "Containers/Select"

export default Select
