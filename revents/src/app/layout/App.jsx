import React, { useState } from "react";
import { Route } from "react-router";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../feature/events/eventDashboard/EventDashboard";
import NavBar from "../../feature/nav/NavBar";
import HomePage from "../../feature/home/HomePage";
import EventForm from "../../feature/events/eventForm/EventForm";
import EventDetailedPage from "../../feature/events/eventDetailed/EventDetailedPage";

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
      <Route exact path='/' component={HomePage} />
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <Route exact path='/events' component={EventDashboard} />
        <Route path='/events/:id' component={EventDetailedPage} />
        <Route path='/createEvent' component={EventForm} />
      </Container>
    </>
  );
}
