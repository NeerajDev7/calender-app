import React, { useState } from "react";
import dayjs from "dayjs";

const YearView = ({ currentDate, events }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const year = currentDate.year();

  if (selectedMonth !== null) {
    const startOfMonth = dayjs(`${year}-${selectedMonth + 1}-01`);
    const daysInMonth = startOfMonth.daysInMonth();
    const startDay = startOfMonth.day();

    const days = Array.from({ length: startDay + daysInMonth }, (_, i) =>
      i < startDay ? null : startOfMonth.add(i - startDay, "day")
    );

    return (
      <div>
        <button onClick={() => setSelectedMonth(null)} style={{ marginBottom: "1rem" }}>
          ← Back to Year
        </button>
        <h3>{startOfMonth.format("MMMM YYYY")}</h3>
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
                    <div key={i} className="event">
                      {e.time} - {e.title}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const months = Array.from({ length: 12 }, (_, i) => dayjs().year(year).month(i).startOf("month"));

  return (
    <div className="calendar-grid year-view">
      {months.map((monthDate, i) => {
        const label = monthDate.format("MMMM");
        return (
          <div className="year-month-box" key={i} onClick={() => setSelectedMonth(i)} style={{ cursor: "pointer" }}>
            <strong>{label}</strong>
            <ul>
              {events
                .filter(e => dayjs(e.date).month() === i && dayjs(e.date).year() === year)
                .slice(0, 3)
                .map((e, j) => (
                  <li key={j}>{dayjs(e.date).date()}: {e.title}</li>
                ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default YearView;
