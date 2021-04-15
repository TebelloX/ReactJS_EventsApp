import React from "react";
<<<<<<< HEAD
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
=======
import { Menu, Button, Image, Dropdown } from "semantic-ui-react";
>>>>>>> parent of 4f1ac44 (menus for authenticated and unauthenticated users)

export default function SignedOutMenu({ setAuthenticated }) {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/user.png' />
<<<<<<< HEAD
      <Dropdown pointing='top left' text='Bob'>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item text='My Profile' icon='plus' />
          <Dropdown.Item
            onClick={() => setAuthenticated(true)}
            text='Sign Out'
            icon='power'
          />
        </Dropdown.Menu>
      </Dropdown>
=======
      <Dropdown pointing='top left' text='Bob'></Dropdown>
>>>>>>> parent of 4f1ac44 (menus for authenticated and unauthenticated users)
    </Menu.Item>
  );
}
