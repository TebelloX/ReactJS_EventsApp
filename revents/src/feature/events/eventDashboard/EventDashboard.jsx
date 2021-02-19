import { Grid } from "semantic-ui-react";
import React, { useState } from "react";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard({ formOpen, setFormOpen }) {
  const [events, setEvents] = useState(sampleData);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleCreateEvent(event) {
    setEvents([...events, event]);
  }

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectedEvent={handleSelectEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvent={handleCreateEvent}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
