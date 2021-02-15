import React from "react";
import EventListAttendee from "./EventListAttendee";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";

export default function EventListItem({ event }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src='{event.hostPhotoURL}' />
            <Item.Content>
              <Item.Header content='{event.title}' />
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> Date
          <Icon name='marker' /> Venue
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          <EventListAttendee />
          <EventListAttendee />
          <EventListAttendee />
          <EventListAttendee />
        </List>
      </Segment>
      <Segment clearing>
        <div>Description of event</div>
        <Button color='teal' floated='right' content='View' />
      </Segment>
    </Segment.Group>
  );
}
