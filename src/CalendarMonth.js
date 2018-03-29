import React, { Component } from 'react';

class CalendarMonth extends Component {

  render(){
    return(
      <div className="month">
      {this.props.month}
      </div>
    )
  }

}
export default CalendarMonth
