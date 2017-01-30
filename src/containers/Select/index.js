import { connect } from "react-redux"
import mainKana from "../../lib/kana"
import dakuten from "../../lib/kana/dakuten"
import handakuten from "../../lib/kana/handakuten"
import toggleEntry from "../../actions/toggleEntry"
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
  const mainColsSelectedRatios = mainKana.coords.mapCols(c => {
    return selectedMain.filter(i => {
      return mainKana.coords.isInCol(i, c)
    }).length / mainKana.getCol(c).filter(e => !e.empty).length
  })
  const dakutenColsSelectedRatios = dakuten.coords.mapCols(c => {
    return selectedDakuten.filter(i => {
      return dakuten.coords.isInCol(i, c)
    }).length / dakuten.getCol(c).filter(e => !e.empty).length
  })
  const handakutenColsSelectedRatios = handakuten.coords.mapCols(c => {
    return selectedHandakuten.filter(i => {
      return handakuten.coords.isInCol(i, c)
    }).length / handakuten.getCol(c).filter(e => !e.empty).length
  })
  return {
    showHiragana,
    showKatakana,
    selectedMain,
    selectedDakuten,
    selectedHandakuten,
    mainColsSelectedRatios,
    dakutenColsSelectedRatios,
    handakutenColsSelectedRatios
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMain: (row, col) => dispatch(toggleEntry("main", row, col)),
    toggleMainCol: col => dispatch(toggleCol("main", col)),
    toggleDakuten: (row, col) => dispatch(toggleEntry("dakuten", row, col)),
    toggleDakutenCol: col => dispatch(toggleCol("dakuten", col)),
    toggleHandakuten: (row, col) => dispatch(toggleEntry("handakuten", row, col)),
    toggleHandakutenCol: col => dispatch(toggleCol("handakuten", col))
  }
}

const Select = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectUI)

Select.displayName = "Containers/Select"

export default Select
