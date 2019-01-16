import React from "react";
import PropTypes from "prop-types";
import Week from "./Weeks";

function WeekDays (props) {
  const weekHeader = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = new Date(props.year, props.month, 0).getDate();
  const firstDay = new Date(props.year, props.month - 1, 1).getDay();
  const prevMonth = new Date(props.year, props.month -1 , 0).getDate();
  const nextMonth = new Date(props.year, props.month +1 , 0).getDate();

  const range = [...Array(days)].map((_, i) => i + 1);
  const prevMonthrange = [...Array(prevMonth)].map((_, i) => i + 1);
  const nextMonthrange = [...Array(nextMonth)].map((_, i) => i + 1);

  for (var i = 0, l = firstDay; i < l; i++) {
    range.unshift(<span className='selectDate-day-disabled '>{prevMonthrange.pop()}</span>);
  }

  var chunks = [];

  while (range.length > 0) {
    chunks.push(range.splice(0, 7));
  }

  var weekDays = [];
  for (var j = 0, len = chunks.length; j < len; j++) {
    if (chunks[j].length < 7) {
      for (var m = chunks[j].length, n = 7; m < n; m++) {
        chunks[j].push(<span className='selectDate-day-disabled '>{nextMonthrange.splice(0, 1)}</span>);
      }
    }
    weekDays.push(
      <Week
        key={j}
        highlight={props.highlight}
        days={chunks[j]}
        selectDay={props.selectDay}
        day={Number(props.day)}
      />
    );
  }
  const weekTitle = weekHeader.map(function(v) {
    return <th key={v}>{v}</th>;
  });

    return (
      <table className='table table-striped'>
        <thead>
          <tr>{weekTitle}</tr>
        </thead>
        <tbody>{weekDays}</tbody>
      </table>
    );
}
WeekDays.propTypes = {
  day: PropTypes.number.isRequired,
  highlight: PropTypes.bool,
  locale: PropTypes.string,
  month: PropTypes.number.isRequired,
  range: PropTypes.arrayOf(PropTypes.number),
  selectDay: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired
};

export default WeekDays;
