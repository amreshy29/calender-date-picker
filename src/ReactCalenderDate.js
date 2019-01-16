import React from "react";
import PropTypes from "prop-types";
import Calendar from "./Calendar";
import getTodayMixin from "./getTodayMixin";

function setParams({ query }) {
  const searchParams = new URLSearchParams();
  searchParams.set("date", query || "");
  return searchParams.toString();
}

export default class ReactDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      range: [1990, 2040],
      locale: "en",
      value: "",
      isCalendarShow: false
    };
  }
  componentDidMount() {
    this.setState({
      value: this.props.query
    });
    document.addEventListener("click", this.documentClickHandler);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.query !== nextProps.query) {
      this.setState({
        value: nextProps.query
      });
    }
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.documentClickHandler);
  }
  documentClickHandler = () => {
    this.setState({
      isCalendarShow: false
    });
  };
  onClickDatePickerArea = e => {
    // stop the click event
    e.nativeEvent.stopImmediatePropagation();
  };
  onClickCalendar = date => {
    this.setState(
      {
        isCalendarShow: false,
        value: date
      },
      () => {
        this.updateURL();
      }
    );
  };
  selectToday = () => {
    var date = getTodayMixin.getToday();
    this.setState(
      {
        isCalendarShow: false,
        value: date
      },
      () => {
        this.updateURL();
      }
    );
  };

  updateURL = () => {
    console.log(this.state.value);
    const url = setParams({ query: this.state.value });
    this.props.history.push(`?${url}`);
  };

  calender = () => {
    return (
      <Calendar
        onClickCalendar={this.onClickCalendar}
        date={this.state.value}
        selectToday={this.selectToday}
        range={this.state.range}
        locale={this.props.locale}
        query={this.props.query}
      />
    );
  };
  focusIn = () => {
    if (this.props.disabled === true) {
      return;
    }
    this.setState({
      isCalendarShow: true
    });
  };
  render() {
    return (
      <div
        className="datePicker input-group col-sm-12"
        onClick={this.onClickDatePickerArea}
      >
        <div className="">
          <p className="text-capitalize">Select Date from the calender</p>
        </div>
        <input
          className={`selectDate-input ${
            this.props.disabled === true ? "selectDate-input-disabled" : ""
          }`}
          type="text"
          onFocus={this.focusIn}
          value={this.state.value}
          readOnly
          disabled={this.props.disabled}
        />
        {this.state.isCalendarShow === false ? null : this.calender()}
      </div>
    );
  }
}
ReactDatePicker.propTypes = {
  disabled: PropTypes.bool,
  locale: PropTypes.string,
  range: PropTypes.arrayOf(PropTypes.number),
  value: PropTypes.string
};
