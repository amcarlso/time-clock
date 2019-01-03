import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import routes from '../../routes';
import axios from 'axios';
import './Wizard.css';

export default class Wizard extends Component {
  constructor(props){
    super(props)

    this.state= {
      date: '',
      day: '',
      hour: '',
      minute: '',
      daynight: '',
      type: ''
    }

    this.handleDateInput = this.handleDateInput.bind(this)
    this.handleDayInput = this.handleDayInput.bind(this)
    this.handleHourInput = this.handleHourInput.bind(this)
    this.handleMinuteInput = this.handleMinuteInput.bind(this)
    this.handleAmPmInput = this.handleAmPmInput.bind(this)
    this.handleInOrOutInput = this.handleInOrOutInput.bind(this)

  }

  handleDateInput(input){
    this.setState({
      date: input
    })
  }
  handleDayInput(input){
    this.setState({
      day: input
    })
  }
  handleHourInput(input){
    this.setState({
      hour: input
    })
  }
  handleMinuteInput(input){
    this.setState({
      minute: input
    })
  }
  handleAmPmInput(input){
    this.setState({
      daynight: input
    })
  }
  handleInOrOutInput(input){
    this.setState({
      type: input
    })
  }

  handleAddPunch(){
    const {date, day, hour, minute, daynight, type} = this.state
    axios.post('/api/punch', {date, day, hour, minute, daynight, type})
    .then(res => {
      this.props.history.push('/')
    })
  }
 

  render(){
    console.log(this.state)
    return(
      <div>
        <div className='new-punch'>New Punch</div>
        <div className='input-box'>
          <div className='category-style'>
            <p>DATE:</p>
            <input onChange={(e) => this.handleDateInput(e.target.value)} />
          </div>
          <div className='category-style'>
            <p>DAY:</p>
            <select onChange={(e) => this.handleDayInput(e.target.value)} >
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <div className='category-style'>
            <p>TIME:</p>
            Hr: <input className='small-input-style' onChange={(e) => this.handleHourInput(e.target.value)} />
            Min: <input className='small-input-style' onChange={(e) => this.handleMinuteInput(e.target.value)} />
            <span id='am-pm-font-sizing'>AM/PM: </span>
            <select className='day-type-input-style' onChange={(e) => this.handleAmPmInput(e.target.value)} >
              <option value='AM'>AM</option>
              <option value='PM'>PM</option>
            </select>
          </div>
          <div className='category-style'>
            <p>PUNCH TYPE:</p>
            <select className='day-type-input-style' onChange={(e) => this.handleInOrOutInput(e.target.value)} >
              <option value='IN'>IN</option>
              <option value='OUT'>OUT</option>
            </select>
          </div>
          <div id='buttons-spacing'>
            <button className='create-punch-button' onClick={() => this.handleAddPunch()}>CREATE PUNCH</button>
            <Link to='/' component={routes}><button className='cancel-button'>CANCEL</button></Link>          
          </div>
        </div>
      </div>  
    )
  }
}