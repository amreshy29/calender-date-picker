import React from "react";
import PropTypes from "prop-types";
function Week (props) {

  var handleClick =(e)=> {
    props.selectDay(e.target.textContent);
  }
    var days = (typeof props.days === "undefined"
      ? []
      : props.days
    ).map(function(day, index) {
      if (day) {
        if (day === props.day && props.highlight) {
          return (
            <td
              key={index}
              className={`selectDate-day-today selectDate-day`}
              onClick={handleClick}
            >
              {day}
            </td>
          );
        } else if(typeof day === 'object') {
          return (
            <td
              key={index}
              className="selectDate-day"
            >
              {day}
            </td>
          );
        } else {
          return (
            <td
              key={index}
              className="selectDate-day"
              onClick={handleClick}
            >
              {day}
            </td>
          );
        }
      } else {
        return (
          <td
            key={index}
            className={`selectDate-day-disabled selectDate-day`}
          />
        );
      }
    }, this);

    return <tr>{days}</tr>;

}
Week.propTypes = {
  day: PropTypes.number,
  days: PropTypes.array.isRequired,
  highlight: PropTypes.bool,
  selectDay: PropTypes.func.isRequired
};

export default Week;
