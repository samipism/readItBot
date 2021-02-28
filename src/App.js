import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { Button, Fade, Nav, Navbar } from "react-bootstrap";
import Demo from "./Demo";
import Team from "./Team";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Navbar bg="primary" expand="lg" variant="dark" className="nav">
        <Navbar.Brand href="/" className="title-project">
          ReadIt
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#abstract">Abstract</Nav.Link>
          <Nav.Link href="#demo">Demo</Nav.Link>
          <Nav.Link href="#team">Team</Nav.Link>
        </Nav>
        <Navbar.Brand className="justify-content-end">
          A demo of Machine Reading Comprehension.
        </Navbar.Brand>
      </Navbar>
      <div className="main-page ">
        <div className="h1 title" id="abstract">
          Abstract
        </div>
        <div className="abstract">
          Machine Reading Comprehension (MRC) aims to teach machines to
          understand a text likea human and answer various questions about the
          text by interacting the question with the context provided. This
          report entitled "Machine Reading Comprehension" discusses an
          implementation of a MRC system based on a Transformer model with two
          modules viz. sketchyreading and intensive reading in the encoder,
          along with a verifying module in the decoder.The model uses the
          pre-trained MRC language model in the encoder. The implemented system,
          "ReadIt", has two interfaces for user interaction: a Question/Answer
          Interface and a Chatbot, in a single web application. The system helps
          users to get the relevant answer to the common queries which removes
          the need for a human to be present hyperactively. The system gives a
          decent performance with high accuracy for the task of span extraction,
          and this can be implemented in autonomous chatbot interfaces by making
          necessary changes.
        </div>
        <div>
          <Demo />
        </div>
        <div>
          <Team />
        </div>
      </div>
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
