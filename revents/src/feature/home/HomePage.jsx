import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";

export default function HomePage() {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted></Header>
      </Container>
    </Segment>
  );
}
