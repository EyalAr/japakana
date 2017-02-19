import { connect } from "react-redux"
import SettingsUI from "../../ui/views/Settings"
import setSettingsAction from "../../actions/setSettings"

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
    }))
  }
}

const Select = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsUI)

Select.displayName = "Containers/Select"

export default Select
