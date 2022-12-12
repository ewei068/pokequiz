import React from "react";
import { Button } from "react-bootstrap";

const LinkButton = ({ callback, children }) => (
  <Button variant="primary" size="lg" className="w-300" onClick={() => callback()}>
    {children}
  </Button>
);

export default LinkButton;