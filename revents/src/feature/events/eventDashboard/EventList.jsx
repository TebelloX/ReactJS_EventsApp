import React from "react";
import EventListItem from "./EventListItem";

export default function EventList(props) {
  return (
    <>
      {props.events}
      <EventListItem />
      <EventListItem />
      <EventListItem />
      <EventListItem />
    </>
  );
}
