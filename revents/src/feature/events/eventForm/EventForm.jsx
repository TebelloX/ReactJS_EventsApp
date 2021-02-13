import React from "react";
import { Segment, Header, Form } from "semantic-ui-react";
export default function EventForm() {
  return (
    <Segment>
      <Header content='Create new event' />
      <Form>
        <Form.Field></Form.Field>
      </Form>
    </Segment>
  );
}
