import React from "react";
import "rsuite/dist/rsuite.min.css";
import { DateRangePicker, CustomProvider } from "rsuite";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import addMonths from "date-fns/addMonths";

import ko_KR from "rsuite/locales/ko_KR";

const predefinedRanges = [
  {
    label: "오늘",
    value: [new Date(), new Date()],
    placement: "left",
    closeOverlay: false,
  },
  {
    label: "어제",
    value: [addDays(new Date(), -1), addDays(new Date(), -1)],
    placement: "left",
    closeOverlay: false,
  },
  {
    label: "최근 7일",
    value: [subDays(new Date(), 6), new Date()],
    placement: "left",
    closeOverlay: false,
  },
  {
    label: "최근 30일",
    value: [subDays(new Date(), 29), new Date()],
    placement: "left",
    closeOverlay: false,
  },
  {
    label: "최근 90일",
    value: [subDays(new Date(), 89), new Date()],
    placement: "left",
    closeOverlay: false,
  },
  {
    label: "이번 달",
    value: [startOfMonth(new Date()), new Date()],
    placement: "left",
    closeOverlay: false,
  },
  {
    label: "지난 달",
    value: [
      startOfMonth(addMonths(new Date(), -1)),
      endOfMonth(addMonths(new Date(), -1)),
    ],
    placement: "left",
    closeOverlay: false,
  },
  {
    label: "이번 년도",
    value: [new Date(new Date().getFullYear(), 0, 1), new Date()],
    placement: "left",
    closeOverlay: false,
  },
  {
    label: "지난 년도",
    value: [
      new Date(new Date().getFullYear() - 1, 0, 1),
      new Date(new Date().getFullYear(), 0, 0),
    ],
    placement: "left",
    closeOverlay: false,
  },
];

const Calendar = () => (
  <CustomProvider locale={ko_KR}>
    <DateRangePicker
      size="sm"
      ranges={predefinedRanges}
      placeholder="조회 기간 선택"
      editable={false}
    />
  </CustomProvider>
);
export default Calendar;
