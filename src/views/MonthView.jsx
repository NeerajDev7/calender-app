import React from "react";
import dayjs from "dayjs";

const MonthView = ({ currentDate, events }) => {
  const startOfMonth = currentDate.startOf("month");
  const daysInMonth = currentDate.daysInMonth();
  const startDay = startOfMonth.day();

  const days = Array.from({ length: startDay + daysInMonth }, (_, i) =>
    i < startDay ? null : startOfMonth.add(i - startDay, "day")
  );

  return (
    <>
      <div className="calendar-grid calendar-days">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {days.map((date, idx) => (
          <div key={idx} className={`day-box ${date?.isSame(dayjs(), "day") ? "today" : ""}`}>
            <div className="day-number">{date?.date()}</div>
            <div className="event-list">
              {events
                .filter(e => date && e.date === date.format("YYYY-MM-DD"))
                .map((e, i) => (
                  <div className="event" key={i}>
                    {e.time} - {e.title}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MonthView;
