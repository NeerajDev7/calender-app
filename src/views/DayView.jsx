import React from "react";
import dayjs from "dayjs";

const DayView = ({ currentDate, events }) => {
  const todayEvents = events.filter(e => e.date === currentDate.format("YYYY-MM-DD"));

  return (
    <div className="day-box today full-width">
      <div className="day-number">{currentDate.format("dddd, MMMM D, YYYY")}</div>
      <div className="event-list">
        {todayEvents.length === 0 ? (
          <p>No events for today.</p>
        ) : (
          todayEvents.map((e, i) => (
            <div className="event" key={i}>
              {e.time} - {e.title}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DayView;
