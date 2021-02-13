import React from "react";
import { Segment, Header, Form } from "semantic-ui-react";
export default function EventForm() {
  return (
    <Segment>
      <Header content='Create new event' />
      <Form>
        <Form.Field>
          <input type='text' placeholder='Event title' />
        </Form.Field>
      </Form>
    </Segment>
  );
}
