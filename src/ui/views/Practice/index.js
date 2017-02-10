import React, { Component } from "react"
import classnames from "classnames/bind"
import Entry from "../../comps/Entry"
import style from "./style.less"

const cx = classnames.bind(style)

const ENTER_KEY_CODE = 13

const waitForFurthenInput = (possibleAnswers, partialAnswer) => {
  const maxLength = Math.max.apply(Math, possibleAnswers.map(a => a.length))
  if (partialAnswer.length === maxLength) return false
  if (possibleAnswers.indexOf(partialAnswer) !== -1) return false
  return true
}

class Practice extends Component {
  constructor (props) {
    super(props)
    this.state = { answer: "" }
    this.onKeyUp = this.onKeyUp.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onKeyUp (e) {
    if (!this.props.pending) return
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

  componentWillReceiveProps (nextProps) {
    if (!nextProps.answer) this.setState({ answer: "" })
  }

  render () {
    const props = this.props
    return (
      <div className={cx("container")}>
        <div className={cx("wrapper")}>
          { props.entry &&
            <Entry
              entry={props.entry}
              showHiragana={props.showHiragana}
              showKatakana={props.showKatakana}
              showRomaji={props.showAnswer}
              selected={false}
              toggle={() => {}}/>
          }
          <input
            type="text"
            value={this.state.answer}
            onKeyUp={this.onKeyUp}
            onChange={this.onChange}/>
          { props.showSuccess && <span>success</span> }
          { props.showFailure && <span>failure</span> }
        </div>
      </div>
    )
  }
}

Practice.displayName = "UI/views/Practice"

export default Practice
