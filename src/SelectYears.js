import React from "react";
import PropTypes from "prop-types";
export default class SelectYear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear()
    };
  }

  handleChange = (e)=> {
    this.props.selectYear(Number(e.currentTarget.value));
  }
  render() {
    var start =
      typeof this.props.range === "undefined" ? 1984 : this.props.range[0];
    var end =
      typeof this.props.range === "undefined" ? 2046 : this.props.range[1];
    var options = [];
    for (var i = start, l = end; i <= l; i++) {
      options.push(i);
    }
    options = options.map(function(option) {
      return (
        <option key={option} value={option}>
          {option}
        </option>
      );
    });
    return (
      <select
        value={this.props.year}
        className="selectDate-year"
        onChange={this.handleChange}
      >
        {options}
      </select>
    );
  }
}

SelectYear.propTypes = {
  range: PropTypes.arrayOf(PropTypes.number),
  selectYear: PropTypes.func.isRequired,
  year: PropTypes.number
};
