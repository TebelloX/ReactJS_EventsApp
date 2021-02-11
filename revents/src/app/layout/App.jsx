import React from "react";
import { Button } from "semantic-ui-react";
import EventDashboard from "../../feature/events/eventDashboard/EventDashboard";

export default function App() {
  return (
    <div className='App'>
      <h1>Re-events</h1>
      <EventDashboard />
    </div>
  );
}
