import React, { useState } from "react";
import dayjs from "dayjs";
import AddEventForm from "./AddEventForm";
import ViewSwitcher from "./ViewSwitcher";
import MonthView from "../views/MonthView";
import WeekView from "../views/WeekView";
import DayView from "../views/DayView";
import YearView from "../views/YearView"

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [events, setEvents] = useState([]);
  const [view, setView] = useState("month");

  const handlePrev = () => setCurrentDate(prev => prev.subtract(1, view));
  const handleNext = () => setCurrentDate(prev => prev.add(1, view));
  const addEvent = event => setEvents([...events, event]);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrev}>&lt; Prev</button>
        <h2>{currentDate.format("MMMM YYYY")}</h2>
        <button onClick={handleNext}>Next &gt;</button>
      </div>

      <ViewSwitcher view={view} setView={setView} />

      {view === "month" && <MonthView currentDate={currentDate} events={events} />}
      {view === "week" && <WeekView currentDate={currentDate} events={events} />}
      {view === "day" && <DayView currentDate={currentDate} events={events} />}
      {view === "year" && <YearView currentDate={currentDate} events={events} />}

      <AddEventForm onAddEvent={addEvent} />
    </div>
  );
};

export default Calendar;
