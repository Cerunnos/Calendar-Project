import React, { Component } from 'react';
import CalendarMonth from './CalendarMonth'
import months from './MonthData'
import './CalendarContainer.css'

class CalendarContainer extends Component {

  render(){
    const renderMonths=months.map((month)=>{
      return <CalendarMonth month={month}/>
    })
    return(
      <div className="container">
      {renderMonths}
      </div>
    )
  }

}
export default CalendarContainer
