import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="">
      Coded by{" "}
      <a
        href="https://github.com/gdbecker/WebDevelopmentProjects"
        target="_blank"
      >
        Garrett Becker
      </a>
    </footer>
  );
}

export default Footer;
