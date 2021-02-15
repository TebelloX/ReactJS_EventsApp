import React from "react";
import EventListItem from "./EventListItem";

export default function EventList(props) {
  return (
    <>
      {props.events.map((event) => (
        <EventListItem event={event} key={event.id} />
      ))}
    </>
  );
}
