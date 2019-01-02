import React, {Component} from 'react';
import TimePunch from '../TimePunch/TimePunch';
import {Link} from 'react-router-dom';
import routes from '../../routes';
import axios from 'axios';
import './Dashboard.css'

export default class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state = {
      punches: []
    }

    this.deletePunch = this.deletePunch.bind(this)
    this.getPunches = this.getPunches.bind(this)
  }
  componentDidMount(){
    this.getPunches()
  }

  getPunches(){
    axios.get('/api/punches').then(res => {
      this.setState({
        punches: res.data
      })
    })
  }
  deletePunch(id){
    axios.delete(`/api/punches/${id}`).then(res => {
      this.getPunches()
    })
  }

  render(){
    let mapPunchesList = this.state.punches.map(punch => {
      return (
        <TimePunch 
          key = {punch.id}
          id = {punch.id}
          date = {punch.m_d_year}
          day = {punch.day_of_week}
          hour = {punch.hour_of_day}
          minute = {punch.min_of_hour}
          dayNight = {punch.am_pm}
          punchType = {punch.punch_type}
          deletePunchFn = {this.deletePunch}
        />
      )
    })
    return(
      <div>
        <h3 id='my-punches'>My Punches</h3>
        <div>{mapPunchesList}</div>
        <Link to='/wizard' component={routes}><button className='new-punch-button'>NEW PUNCH</button></Link>
        
      </div>
    )
  }

}

