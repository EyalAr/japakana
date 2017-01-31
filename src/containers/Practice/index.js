import { Component } from "react"
import { connect } from "react-redux"
import mainKana from "../../lib/kana"
import dakuten from "../../lib/kana/dakuten"
import handakuten from "../../lib/kana/handakuten"
import toggleEntry from "../../actions/toggleEntry"
import toggleCol from "../../actions/toggleCol"
import PracticeUI from "../../ui/views/Practice"

class PracticeContainer extends Component {
  constructor (props) {
    super(props)
    this.submitAnswer = this.submitAnswer.bind(this)
    this.skip = this.skip.bind(this)
  }

  render () {
    return (
      <PracticeUI
        submitAnswer={this.submitAnswer}
        skip={this.skip}/>
    )
  }
}

const mapStateToProps = (state, props) => {
  const data = state.data
  const mode = data.getIn(["settings", "mode"])
  const showHiragana = mode !== "katakana"
  const showKatakana = mode !== "hiragana"
  const selectedMain = data.getIn(["selection", "main"]).toJS()
  const selectedDakuten = data.getIn(["selection", "dakuten"]).toJS()
  const selectedHandakuten = data.getIn(["selection", "handakuten"]).toJS()

  return {}
}


const mapDispatchToProps = dispatch => {
  return {}
}

const Practice = connect(
  mapStateToProps,
  mapDispatchToProps
)(PracticeContainer)

Practice.displayName = "Containers/Practice"

export default Practice
