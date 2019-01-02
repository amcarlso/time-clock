import React from 'react';
import './TimePunch.css'

export default function TimePunch(props){
  return(
    <div className='punch-box'>
      <div className='input-style'>{props.punchType}</div>
      <div>DATE:</div>
      <div className='input-style'>{props.date}</div>
      <div>DAY:</div>
      <div className='input-style'>{props.day}</div>
      <div>TIME:</div>
      <div className='input-style'>{props.hour}:{props.minute}{props.dayNight}</div>
      <div className='input-style'></div>
      <button className='edit-button'>Edit</button>
      <button className='delete-button' onClick={() => props.deletePunchFn(props.id)}>Delete</button>
    </div>
  )
}