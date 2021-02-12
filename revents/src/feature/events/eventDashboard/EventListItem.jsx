import React from "react";
import { Item, Segment } from "semantic-ui-react";

export default function EventListItem() {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item size='tiny' circular src='/assets/user.png' />
          </Item>
        </Item.Group>
      </Segment>
    </Segment.Group>
  );
}
