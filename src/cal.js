import React, { useState, useEffect } from "react";
import { DateRangePicker } from "rsuite";
import format from "date-fns/format";
import isValid from "date-fns/isValid";
import "./index.css";

const CustomDateRangePicker = () => {
  const [selectedDate, setSelectedDate] = useState([new Date(), new Date()]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const option = [
    {
      label: startDate + " ~ " + endDate,
      value: selectedDate,
    },
  ];
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const renderValue = (value, formatStr) => {
    if (value[0] && value[1]) {
      setStartDate(format(value[0], formatStr));
      setEndDate(format(value[1], formatStr));
      setSelectedDate([value[0], value[1]]);
      console.log(selectedDate);
      console.log(startDate);
      console.log(endDate);
    }
  };

  return (
    <DateRangePicker
      format="yyyy-MM-dd"
      renderValue={renderValue}
      value={selectedDate}
      onChange={handleDateChange}
      ranges={option}
    />
  );
};

export default CustomDateRangePicker;
