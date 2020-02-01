import React from "react";

const Footer = props => {
  const items = props.list.map(item => <li>{item}</li>);
  return <ul>{items}</ul>;
};

export default Footer;
