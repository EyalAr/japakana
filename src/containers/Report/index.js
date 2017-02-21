import { connect } from "react-redux"
import { Map } from "immutable"
import ReportUI from "../../ui/views/Report"

const mapStateToProps = (state, props) => {
  const data = state.data
  const mode = data.getIn(["settings", "mode"])
  const showHiragana = mode !== "katakana"
  const showKatakana = mode !== "hiragana"
  const history = data.get("history", Map()).toJS()
  return {
    showHiragana,
    showKatakana,
    history
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const Report = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportUI)

Report.displayName = "Containers/Report"

export default Report
