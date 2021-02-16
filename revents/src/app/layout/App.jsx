import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../feature/events/eventDashboard/EventDashboard";
import NavBar from "../../feature/nav/NavBar";

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <h1>Re-events</h1>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen} />
      </Container>
    </>
  );
}
