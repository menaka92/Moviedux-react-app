import React from "react";
import "../styles.css";

function Footer() {
  const currecntYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-text">
      ⓒ {currecntYear} movedux All rigts reserved.
      </p>
    </footer>
  );
}

export default Footer;
