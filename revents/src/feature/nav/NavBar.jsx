import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import SignedOutMenu from "./SignedOutMenu";

export default function NavBar({ setFormOpen }) {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: 15 }}></img>
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        <Menu.Item as={NavLink} to='/createEvent'>
          <Button positive inverted content='Create Event' />
        </Menu.Item>
        <SignedOutMenu />
      </Container>
    </Menu>
  );
}
