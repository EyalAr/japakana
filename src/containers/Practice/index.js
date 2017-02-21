import React, { Component } from "react"
import { connect } from "react-redux"
import { List } from "immutable"
import generatePracticeEntry from "../../actions/generatePracticeEntry"
import resetPractice from "../../actions/resetPractice"
import submitAnswerAction from "../../actions/submitAnswer"
import updateAnswerAction from "../../actions/updateAnswer"
import decreaseTimeLeft from "../../actions/decreaseTimeLeft"
import toggleAnswerAction from "../../actions/toggleAnswer"
import toggleFailureOffAction from "../../actions/toggleFailureOff"
import setTimeUpAction from "../../actions/setTimeUp"
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
      if (nextProps.timer && !this.t) {
        this.t = setTimeout(() => {
          nextProps.setTimeUp(true)
          nextProps.submitAnswer(null)
          delete this.t
        }, nextProps.timer)
      }
      if (nextProps.showFailure) {
        setTimeout(nextProps.toggleFailureOff, nextProps.failureDelay)
      }
    } else {
      if (this.t) clearTimeout(this.t)
      delete this.t
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
        timer={this.props.timer}
        timeUp={this.props.timeUp}
        pending={this.props.pending}
        showSuccess={this.props.showSuccess}
        showFailure={this.props.showFailure}
        showHiragana={this.props.showHiragana}
        showKatakana={this.props.showKatakana}
        showAnswer={this.props.showAnswer}
        waitForEnter={this.props.waitForEnter}
        entry={this.props.entry}
        answer={this.props.answer}
        toggleAnswer={this.props.toggleAnswer}
        entryAttemptsCount={this.props.entryAttemptsCount}
        entrySuccessCount={this.props.entrySuccessCount}
        attemptsCount={this.props.attemptsCount}
        successCount={this.props.successCount}/>
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
  const entryTable = data.getIn(["practice", "entryTable"])
  const entryIndex = data.getIn(["practice", "entryIndex"])
  const historyKey = [entryTable, entryIndex].join(":")
  const entryAttemptsCount = data.getIn(["history", "entries", historyKey, "attemptsCount"], 0)
  const entrySuccessCount = data.getIn(["history", "entries", historyKey, "successCount"], 0)
  const attemptsCount = data.getIn(["history", "attemptsCount"], 0)
  const successCount = data.getIn(["history", "successCount"], 0)
  const showSuccess = data.getIn(["practice", "showSuccess"])
  const showFailure = data.getIn(["practice", "showFailure"])
  const showAnswer = data.getIn(["practice", "showAnswer"])
  const answer = data.getIn(["practice", "answer"])
  const timeUp = data.getIn(["practice", "timeUp"])
  const successDelay = data.getIn(["settings", "successDelay"])
  const failureDelay = data.getIn(["settings", "failureDelay"])
  const waitForEnter = data.getIn(["settings", "waitForEnter"])
  const timer = data.getIn(["settings", "timer"])
  return {
    showHiragana,
    showKatakana,
    pending,
    entry,
    showSuccess,
    showFailure,
    showAnswer,
    answer,
    successDelay,
    failureDelay,
    waitForEnter,
    timer,
    timeUp,
    entryAttemptsCount,
    entrySuccessCount,
    attemptsCount,
    successCount
  }
}

const mapDispatchToProps = dispatch => {
  const next = () => dispatch(generatePracticeEntry())
  const reset = () => dispatch(resetPractice())
  const setTimeUp = timeUp => dispatch(setTimeUpAction(timeUp))
  const tick = by => dispatch(decreaseTimeLeft(by))
  const submitAnswer = answer => dispatch(submitAnswerAction(answer))
  const updateAnswer = answer => dispatch(updateAnswerAction(answer))
  const toggleAnswer = show => dispatch(toggleAnswerAction(show))
  const toggleFailureOff = () => dispatch(toggleFailureOffAction())
  return {
    next,
    reset,
    setTimeUp,
    tick,
    submitAnswer,
    updateAnswer,
    toggleAnswer,
    toggleFailureOff
  }
}

const Practice = connect(
  mapStateToProps,
  mapDispatchToProps
)(PracticeContainer)

Practice.displayName = "Containers/Practice"

export default Practice
