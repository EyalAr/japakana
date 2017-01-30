import { connect } from "react-redux"
import toggleEntry from "../../actions/toggleEntry"
import toggleRow from "../../actions/toggleRow"
import toggleCol from "../../actions/toggleCol"
import SelectUI from "../../ui/views/Select"

const mapStateToProps = (state, props) => {
  const data = state.data
  const mode = data.getIn(["settings", "mode"])
  const showHiragana = mode !== "katakana"
  const showKatakana = mode !== "hiragana"
  const selectedMain = data.getIn(["selection", "main"]).toJS()
  const selectedDakuten = data.getIn(["selection", "dakuten"]).toJS()
  const selectedHandakuten = data.getIn(["selection", "handakuten"]).toJS()
  return {
    showHiragana,
    showKatakana,
    selectedMain,
    selectedDakuten,
    selectedHandakuten
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMain: (row, col) => dispatch(toggleEntry("main", row, col)),
    toggleMainRow: row => dispatch(toggleRow("main", row)),
    toggleMainCol: col => dispatch(toggleCol("main", col)),
    toggleDakuten: (row, col) => dispatch(toggleEntry("dakuten", row, col)),
    toggleDakutenRow: row => dispatch(toggleRow("dakuten", row)),
    toggleDakutenCol: col => dispatch(toggleCol("dakuten", col)),
    toggleHandakuten: (row, col) => dispatch(toggleEntry("handakuten", row, col)),
    toggleHandakutenRow: row => dispatch(toggleRow("handakuten", row)),
    toggleHandakutenCol: col => dispatch(toggleCol("handakuten", col))
  }
}

const Select = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectUI)

Select.displayName = "Containers/Select"

export default Select
