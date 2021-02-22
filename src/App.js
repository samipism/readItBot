import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { Button, Fade, Navbar } from "react-bootstrap";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home" className="title">
          ReadIt
        </Navbar.Brand>
        <Navbar.Brand>A demo of Machine Reading Comprehension.</Navbar.Brand>
      </Navbar>

      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-fade-text"
          aria-expanded={open}
          className="float"
        >
          Bot
        </Button>
        <Fade className="bot" in={open}>
          <div>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </Fade>
      </>
    </div>
  );
}
export default App;
