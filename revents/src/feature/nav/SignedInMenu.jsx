import React from "react";
import { Menu, Button, Image } from "semantic-ui-react";

export default function SignedOutMenu() {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/user.png' />
    </Menu.Item>
  );
}
