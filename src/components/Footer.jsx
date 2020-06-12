import React from "react";

function Footer() {
  let date = new Date().getFullYear();
  return <footer>Copyright © {date}</footer>;
}

export default Footer;
