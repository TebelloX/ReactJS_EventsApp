import { Grid } from "semantic-ui-react";
import React, { useState } from "react";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvent(event) {
    setEvents([...events, event]);
  }

  function handleUpdateEvent() {
    setEvents(
      events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
    );
    selectEvent(null);
    setFormOpen(false);
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={selectEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            key={selectedEvent ? selectedEvent.id : null}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
