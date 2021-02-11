import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          <img src='/assets/logo.png' alt='logo'></img>
          Re-vents
        </Menu.Item>
        <Menu name='Events' />
        <Menu.Item>
          <Button positive inverted content='Create Event' />
        </Menu.Item>
        <Menu.Item>
          <Button basic inverted content='Login'></Button>
          <Button basic inverted content='Login'></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
