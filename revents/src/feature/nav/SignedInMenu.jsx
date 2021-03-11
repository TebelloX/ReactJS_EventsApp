import React from "react";
import { Menu, Button, Image, Dropdown } from "semantic-ui-react";

export default function SignedOutMenu() {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/user.png' />
      <Dropdown></Dropdown>
    </Menu.Item>
  );
}
