import React from "react";
import { Button, Container, Header, Image, Segment } from "semantic-ui-react";

export default function HomePage() {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            style={{ marginBottom: 12 }}
          />
          Re-vents
        </Header>
        <Button size='huge' inverted></Button>
      </Container>
    </Segment>
  );
}
