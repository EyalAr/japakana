import React, { Component } from "react"
import { connect } from "react-redux"
import generatePracticeEntry from "../../actions/generatePracticeEntry"
import resetPractice from "../../actions/resetPractice"
import submitAnswer from "../../actions/submitAnswer"
import updateAnswer from "../../actions/updateAnswer"
import decreaseTimeLeft from "../../actions/decreaseTimeLeft"
import PracticeUI from "../../ui/views/Practice"

class PracticeContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.next()
  }

  componentWillUnmount () {
    if (this.t) clearTimeout(this.t)
    delete this.t
    this.props.reset()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.pending) {
      if (nextProps.timeLeft !== false) {
        if (nextProps.timeLeft <= 0) {
          nextProps.timeUp()
        } else {
          const now = Date.now()
          const delay = Math.max(100 - (now - (this.prevTick || now)), 0)
          this.prevTick = now
          this.t = setTimeout(() => nextProps.tick(100), delay)
        }
      }
    } else {
      if (nextProps.showSuccess) {
        setTimeout(nextProps.next, nextProps.successDelay)
      }
      if (nextProps.showFailure) {
        setTimeout(nextProps.next, nextProps.failureDelay)
      }
    }
  }

  render () {
    return (
      <PracticeUI
        submitAnswer={this.props.submitAnswer}
        updateAnswer={this.props.updateAnswer}
        skip={() => this.props.submitAnswer(null)}
        timeLeft={this.props.timeLeft}
        showSuccess={this.props.showSuccess}
        showFailure={this.props.showFailure}
        showHiragana={this.props.showHiragana}
        showKatakana={this.props.showKatakana}
        entry={this.props.entry}/>
    )
  }
}

const mapStateToProps = (state, props) => {
  const data = state.data
  const mode = data.getIn(["settings", "mode"])
  const showHiragana = mode !== "katakana"
  const showKatakana = mode !== "hiragana"
  const pending = data.getIn(["practice", "pending"])
  const entry = data.getIn(["practice", "entry"])
  const showSuccess = data.getIn(["practice", "showSuccess"])
  const showFailure = data.getIn(["practice", "showFailure"])
  const timeLeft = data.getIn(["practice", "timeLeft"])
  const answer = data.getIn(["practice", "answer"])
  const successDelay = data.getIn(["settings", "successDelay"])
  const failureDelay = data.getIn(["settings", "failureDelay"])
  return {
    showHiragana,
    showKatakana,
    pending,
    entry,
    showSuccess,
    showFailure,
    timeLeft,
    answer,
    successDelay,
    failureDelay
  }
}

const mapDispatchToProps = dispatch => {
  const next = () => dispatch(generatePracticeEntry())
  const reset = () => dispatch(resetPractice())
  const timeUp = () => dispatch(submitAnswer(null))
  const tick = by => dispatch(decreaseTimeLeft(by))
  const submitAnswer = answer => dispatch(submitAnswer(answer))
  const updateAnswer = answer => dispatch(updateAnswer(answer))
  return {
    next,
    reset,
    timeUp,
    tick,
    submitAnswer,
    updateAnswer
  }
}

const Practice = connect(
  mapStateToProps,
  mapDispatchToProps
)(PracticeContainer)

Practice.displayName = "Containers/Practice"

export default Practice
