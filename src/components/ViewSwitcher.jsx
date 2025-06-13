import React from "react";

const ViewSwitcher = ({ view, setView }) => {
  return (
    <div className="view-switcher">
      <button
        className={view === "month" ? "active" : ""}
        onClick={() => setView("month")}
      >
        Month
      </button>
    
      <button
        className={view === "day" ? "active" : ""}
        onClick={() => setView("day")}
      >
        Day
      </button>
      <button
        className={view === "year" ? "active" : ""}
        onClick={() => setView("year")}
      >
        Year
      </button>
    </div>
  );
};

export default ViewSwitcher;
