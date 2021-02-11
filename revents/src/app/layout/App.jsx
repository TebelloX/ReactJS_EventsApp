import React from "react";
import EventDashboard from "../../feature/events/eventDashboard/EventDashboard";
import NavBar from "../../feature/nav/NavBar";

export default function App() {
  return (
    <div>
      <h1>Re-events</h1>
      <NavBar />
      <EventDashboard />
    </div>
  );
}
