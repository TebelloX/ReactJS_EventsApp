import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

export default function SignedOutMenu() {
  <Menu.Item position='right'>
    <Button basic inverted content='Login' />
    <Button basic inverted content='Register' style={{ marginLeft: "0.5em" }} />
  </Menu.Item>;
}
