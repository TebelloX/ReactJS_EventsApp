import React from "react";
import EventListAttendee from "./EventListAttendee";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";

export default function EventListItem() {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item size='tiny' circular src='/assets/user.png' />
            <Item.Content>
              <Item.Header content='Event Title' />
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
        <span>Description of event</span>
        <Button color='teal' floated='right' content='View' />
      </Segment>
    </Segment.Group>
  );
}
