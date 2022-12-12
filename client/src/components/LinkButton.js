import React from "react";
import Link from 'next/link'
import { Button } from "react-bootstrap";

const LinkButton = ({ link, children }) => (
  <Link href={link}>
    <Button variant="primary" size="lg" className="blue-button">
      {children}
    </Button>
  </Link>
);

export default LinkButton;