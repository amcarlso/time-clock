import React, {Component} from 'react';
import './TimePunch.css'

export default class TimePunch extends Component {
  constructor(props){
    super(props)

    this.state = {
      edit: false,
      dateInput: this.props.date,
      dayInput: this.props.day,
      hourInput: this.props.hour,
      minuteInput: this.props.minute,
      dayNightInput: this.props.dayNight,
      punchTypeInput: this.props.punchType
    }
    this.handleInputToggle = this.handleInputToggle.bind(this)
    this.handleDateInput = this.handleDateInput.bind(this)
    this.handleDayInput = this.handleDayInput.bind(this)
    this.handleHourInput = this.handleHourInput.bind(this)
    this.handleMinuteInput = this.handleMinuteInput.bind(this)
    this.handleAmPmInput = this.handleAmPmInput.bind(this)
    this.handleInOrOutInput = this.handleInOrOutInput.bind(this)
  }

  handleInputToggle() {
    if(this.state.edit === true) {
      this.setState({
        edit: false
      })
    } else {
      this.setState({
        edit: true
      })
    }
  }


  handleDateInput(date){
    this.setState({
      dateInput: date
    })
  }
  handleDayInput(day){
    this.setState({
      dayInput: day
    })
  }
  handleHourInput(hour){
    this.setState({
      hourInput: hour
    })
  }
  handleMinuteInput(minute){
    this.setState({
      minuteInput: minute
    })
  }
  handleAmPmInput(dayNight){
    this.setState({
      dayNightInput: dayNight
    })
  }
  handleInOrOutInput(punchType){
    this.setState({
      punchTypeInput:punchType
    })
  }


  render() {
    return(
      <div className='punch-box'>
        <div className='punch-spacing'>
          {this.state.edit ? <input className='large-input-style' placeholder='In Or Out' onChange={(e) => this.handleInOrOutInput(e.target.value)} /> : this.props.punchType}
        </div>
        <div>DATE:</div>
        <div className='punch-spacing'>
          {this.state.edit ? <input className='large-input-style' placeholder='Date' onChange={(e) => this.handleDateInput(e.target.value)} /> : this.props.date}
        </div>
        <div>DAY:</div>
        <div className='punch-spacing'>
          {this.state.edit ? <input className='large-input-style' placeholder='Day' onChange={(e) => this.handleDayInput(e.target.value)} /> : this.props.day}
        </div>
        <div>TIME:</div>
        <div>
          {this.state.edit ? <input placeholder='Hour' className='small-input-style' onChange={(e) => this.handleHourInput(e.target.value)} /> : `${this.props.hour}:`}
          {this.state.edit ? <input placeholder='Minute' className='small-input-style' onChange={(e) => this.handleMinuteInput(e.target.value)} /> : this.props.minute}
          {this.state.edit ? <input placeholder='am/pm' className='small-input-style' onChange={(e) => this.handleAmPmInput(e.target.value)} /> : this.props.dayNight}
        </div>
        <div className='time-punch-spacing'></div>
      {this.state.edit ? <button onClick={() => {this.handleInputToggle(); this.props.editPunchFn(this.props.id, this.state.punchTypeInput, this.state.dateInput, this.state.dayInput, this.state.hourInput, this.state.minuteInput, this.state.dayNightInput)}} className='edit-button'>Save</button> : <button onClick={() => this.handleInputToggle()} className='edit-button'>Edit</button>}
        <button className='delete-button' onClick={() => this.props.deletePunchFn(this.props.id)}>Delete</button>
      </div>
    )
  }
}