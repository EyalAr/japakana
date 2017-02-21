import React, { Component } from "react"
import classnames from "classnames/bind"
import { Circle } from "react-progressbar.js"
import Entry from "../../comps/Entry"
import style from "./style.less"

const cx = classnames.bind(style)

const ENTER_KEY_CODE = 13
const A_KEY_CODE = 65
const Z_KEY_CODE = 90
const a_KEY_CODE = 97
const z_KEY_CODE = 122

const waitForFurthenInput = (possibleAnswers, partialAnswer) => {
  const maxLength = Math.max.apply(Math, possibleAnswers.map(a => a.length))
  if (partialAnswer.length === maxLength) return false
  if (possibleAnswers.indexOf(partialAnswer) !== -1) return false
  return true
}

class Practice extends Component {
  constructor (props) {
    super(props)
    this.state = { answer: "", timeLeft: props.timer }
    this.onKeyUp = this.onKeyUp.bind(this)
    this.onChange = this.onChange.bind(this)
    if (props.timer) this.t = setInterval(() => {
      if (this.state.timeLeft > 0) {
        this.setState({ timeLeft: this.state.timeLeft - 100 })
      }
    }, 100)
  }

  onKeyUp (e) {
    if (!this.props.pending) return
    if (
      e.keyCode !== ENTER_KEY_CODE &&
      !(e.keyCode >= A_KEY_CODE && e.keyCode <= Z_KEY_CODE) &&
      !(e.keyCode >= a_KEY_CODE && e.keyCode <= z_KEY_CODE)
    ) return
    if (
      e.keyCode === ENTER_KEY_CODE ||
      (
        !this.props.waitForEnter &&
        !waitForFurthenInput(this.props.entry.alts, this.state.answer.toLowerCase())
      )
    ) {
      this.props.submitAnswer(this.state.answer)
    } else {
      this.props.updateAnswer(this.state.answer)
    }
  }

  onChange (e) {
    if (this.props.pending) this.setState({ answer: e.target.value })
  }

  componentWillUnmount () {
    if (this.t) clearInterval(this.t)
    delete this.t
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.answer) {
      this.setState({ answer: "" })
    }
    if (!nextProps.pending) {
      this.setState({ timeLeft: nextProps.timer })
    }
  }

  render () {
    const props = this.props
    const progress = props.timer ? this.state.timeLeft / props.timer : 1
    return (
      <div className={cx("container")}>
        <div className={cx("circlesWrapper")}>
          <div className={cx("statsWrapper")}>
            <div className={cx("statsNumbers")}>
              <div className={cx("statsSuccessCount")}>
                {props.successCount}
              </div>
              <div className={cx("statsAttemptsCount")}>
                {props.attemptsCount}
              </div>
            </div>
            <Circle
              containerClassName={cx("statsCircle")}
              progress={props.attemptsCount ? props.successCount / props.attemptsCount : 1}
              options={{ duration: 200, color: "#919191" }}/>
          </div>
          <div className={cx("entryWrapper", {
              success: props.showSuccess,
              failure: props.showFailure
            })}>
            { props.entry &&
              <Entry
                className={cx("entry")}
                entry={props.entry}
                showHiragana={props.showHiragana}
                showKatakana={props.showKatakana}
                showRomaji={props.showAnswer}
                selected={false}
                toggle={() => props.toggleAnswer(!props.showAnswer)}/>
            }
            { props.timer &&
              <Circle
                containerClassName={cx("circle")}
                progress={progress}
                options={{ duration: progress === 1 ? 0 : 200 }}/>
            }
          </div>
          <div className={cx("entryStatsWrapper")}>
            <div className={cx("entryStatsNumbers")}>
              <div className={cx("entryStatsSuccessCount")}>
                {props.entrySuccessCount}
              </div>
              <div className={cx("entryStatsAttemptsCount")}>
                {props.entryAttemptsCount}
              </div>
            </div>
            <Circle
              containerClassName={cx("entryStatsCircle")}
              progress={props.entryAttemptsCount ? props.entrySuccessCount / props.entryAttemptsCount : 1}
              options={{ duration: 200, color: "#919191" }}/>
          </div>
        </div>
        <input
          className={cx("input")}
          type="text"
          value={this.state.answer}
          onKeyUp={this.onKeyUp}
          onChange={this.onChange}/>
      </div>
    )
  }
}

Practice.displayName = "UI/views/Practice"

export default Practice
