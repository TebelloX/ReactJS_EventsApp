import React from "react";
import { Item, Segment } from "semantic-ui-react";

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
    </Segment.Group>
  );
}
