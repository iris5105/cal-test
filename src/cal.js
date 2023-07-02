import React, { useState, useEffect } from "react";
import "rsuite/dist/rsuite.min.css";
import { DateRangePicker, Input, CustomProvider } from "rsuite";
import format from "date-fns/format";
import koKR from "rsuite/locales/ko_KR";

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
      return `${format(value[0], formatStr)} - ${format(value[1], formatStr)}`;
    }
  };
  useEffect(() => {
    if (startDate && endDate) {
      setPickedRange([startDate, endDate]);
    }
  }, [startDate, endDate]);
  const labelValue = `${format(PickedRange[0], "yyyy-MM-dd")} - ${format(
    PickedRange[1],
    "yyyy-MM-dd"
  )}`;
  const ranges = [
    // {
    //   label: `${format(PickedRange[0], "yyyy-MM-dd")} - ${format(
    //     PickedRange[1],
    //     "yyyy-MM-dd"
    //   )}`,
    //   value: PickedRange,
    // },
    {
      label: (
        <Input className="SelectRange" plaintext value={labelValue} readOnly />
      ),
      value: PickedRange,
      readOnly: true,
      closeOverlay: false,
    },
  ];
  const customLocale = {
    ok: "확인", // DateRangePicker의 버튼 이름 변경
  };

  return (
    <CustomProvider locale={koKR}>
      <DateRangePicker
        format="yyyy-MM-dd"
        renderValue={renderValue}
        value={selectedDate}
        onChange={handleDateChange}
        ranges={ranges}
        locale={customLocale}
        closeLabel="Close"
      />
    </CustomProvider>
  );
};

export default CustomDateRangePicker;
