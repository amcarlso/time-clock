import React, {Component} from 'react';
import TimePunch from '../TimePunch/TimePunch';

export default class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state = {
      punches: []
    }
  }

  render(){
    return(
      <div>
        <h3>Dashboard</h3>
        <TimePunch />
      </div>
    )
  }

}

