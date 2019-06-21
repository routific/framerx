import * as React from "react";
import { DatePicker } from "antd";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export interface Props {
    label: string
  }

function onChange(date, dateString) {
  console.log(date, dateString);
}

export const Date = () => {
  return <RangePicker onChange={onChange} />
};
