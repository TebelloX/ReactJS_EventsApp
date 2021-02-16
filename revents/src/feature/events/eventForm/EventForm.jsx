import React, { useState } from "react";
import { Segment, Header, Form, Button } from "semantic-ui-react";
export default function EventForm({ setFormOpen, setEvents }) {
  const initialValues = {
    title: "",
    category: "",
    description: "",
    city: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    console.log(title);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values });
  }
  return (
    <Segment clearing>
      <Header content='Create new event' />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Category' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Description' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='City' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Venue' />
        </Form.Field>
        <Form.Field>
          <input type='date' placeholder='Date' />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          onClick={() => setFormOpen(false)}
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
}
