import React from "react";
import "./Header.css";

export default function Header(props) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const current = new Date();
  const weekday = weekDays[current.getDay()];
  const month = months[current.getMonth()];
  const date = current.getDate();
  let hour = current.getHours();
  let timestamp = hour >= 12 ? "PM" : "AM";
  if (hour === 0) {
    hour = 12;
  } else if (hour >= 13) {
    hour = hour - 12;
  }

  let minutes = current.getMinutes();
  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="Header">
      <h1 className="city-name">{props.data}</h1>
      <h3 className="date-time">
        {weekday} | {month} {date} | {hour}:{minutes} {timestamp}
      </h3>
    </div>
  );
}
