import React, { useState, useEffect } from "react";
import "rsuite/dist/rsuite.min.css";
import { DateRangePicker } from "rsuite";
import format from "date-fns/format";

const CustomDateRangePicker = () => {
  const [selectedDate, setSelectedDate] = useState([new Date(), new Date()]);
  const [PickedRange, setPickedRange] = useState([new Date(), new Date()]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const renderValue = (value, formatStr) => {
    if (value[0] && value[1]) {
      setStartDate(value[0]);
      setEndDate(value[1]);
      console.log("startDate: ", startDate);
      console.log("endDate: ", endDate);
      return `${format(value[0], formatStr)} - ${format(value[1], formatStr)}`;
    }
  };
  useEffect(() => {
    if (startDate && endDate) {
      setPickedRange([startDate, endDate]);
    }
  }, [startDate, endDate]);
  const ranges = [
    {
      label: `${format(PickedRange[0], "yyyy-MM-dd")} - ${format(
        PickedRange[1],
        "yyyy-MM-dd"
      )}`,
      value: PickedRange,
    },
  ];

  return (
    <DateRangePicker
      format="yyyy-MM-dd"
      renderValue={renderValue}
      value={selectedDate}
      onChange={handleDateChange}
      ranges={ranges}
    />
  );
};

export default CustomDateRangePicker;
