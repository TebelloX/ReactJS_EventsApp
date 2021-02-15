import { Grid } from "semantic-ui-react";
import React, { useState } from "react";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard() {
  const [events, setEvents] = useState(sampleData);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventForm />
      </Grid.Column>
    </Grid>
  );
}
