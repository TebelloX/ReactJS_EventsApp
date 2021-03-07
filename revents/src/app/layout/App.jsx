import React, { useState } from "react";
import { Route } from "react-router";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../feature/events/eventDashboard/EventDashboard";
import NavBar from "../../feature/nav/NavBar";
import HomePage from "../../feature/home/HomePage";
import EventForm from "../../feature/events/eventForm/EventForm";

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      <h1>Re-events</h1>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <Route path='/' component={HomePage} />
        <Route path='/events' component={EventDashboard} />
        <Route path='/events/:id' component={EventDashboard} />
        <Route path='/createEvent' component={EventForm} />
      </Container>
    </>
  );
}
