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
      this.setState({
        punches: res.data
      })
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
            <input onChange={(e) => this.handleDayInput(e.target.value)} /> {/* I need to figure out how to do dropdown */}
          </div>
          <div className='category-style'>
            <p>TIME:</p>
            Hr: <input className='small-input-style' onChange={(e) => this.handleHourInput(e.target.value)} />
            Min: <input className='small-input-style' onChange={(e) => this.handleMinuteInput(e.target.value)} />
            <span id='am-pm-font-sizing'>AM/PM: </span><input className='small-input-style' onChange={(e) => this.handleAmPmInput(e.target.value)} />
          </div>
          <div className='category-style'>
            <p>PUNCH TYPE:</p>
            <input onChange={(e) => this.handleInOrOutInput(e.target.value)} />
          </div>
          <div id='buttons-spacing'>
            <Link to='/' component={routes}><button className='create-punch-button' onClick={() => this.handleAddPunch()}>CREATE PUNCH</button></Link>
            <Link to='/' component={routes}><button className='cancel-button'>CANCEL</button></Link>          
          </div>
        </div>
      </div>
        
    )
  }
}