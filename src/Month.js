import React from "react";
import PropTypes from "prop-types";

export default class Month extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  }
  handleChange = (e)=> {
    this.props.selectMonth(Number(e.currentTarget.value));
  }
  render() {
    var options = this.state.months.map(function(month, index) {
      return <option key={index} value={index + 1}>{`${month}`}</option>;
    });
    return (
      <select
        value={this.props.month}
        className="selectDate-month"
        onChange={this.handleChange}
      >
        {options}
      </select>
    );
  }
}
Month.propTypes = {
  locale: PropTypes.string,
  month: PropTypes.number,
  selectMonth: PropTypes.func.isRequired
};
