import React, { useState } from "react";
import dayjs from "dayjs";

const AddEventForm = ({ onAddEvent }) => {
  const [form, setForm] = useState({
    title: "",
    date: dayjs().format("YYYY-MM-DD"),
    time: "",
    duration: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanedEvent = {
      title: form.title.trim(),
      date: dayjs(form.date).format("YYYY-MM-DD"),
      time: form.time,
      duration: form.duration
    };

    onAddEvent(cleanedEvent);
    setForm({
      title: "",
      date: dayjs().format("YYYY-MM-DD"),
      time: "",
      duration: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3>Add Event</h3>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="duration"
        placeholder="Duration"
        value={form.duration}
        onChange={handleChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddEventForm;
