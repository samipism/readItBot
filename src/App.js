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
          orem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat,
          est at varius imperdiet, orci mi maximus arcu, in pulvinar enim metus
          blandit nisl. Vestibulum metus orci, lacinia et nulla in, euismod
          facilisis augue. Sed ac nisl imperdiet arcu sollicitudin interdum.
          Aliquam egestas velit sed egestas suscipit. Maecenas sapien enim,
          dignissim at varius vel, venenatis nec odio. Aliquam eu egestas orci.
          Nullam accumsan pulvinar libero fringilla tincidunt. Suspendisse nec
          turpis eget ante ornare volutpat. Nullam eros ligula, varius eu erat
          et, gravida iaculis ante. Mauris ultricies odio id mauris suscipit
          porta. Donec laoreet eleifend nisi. Suspendisse fermentum nibh sapien,
          nec pulvinar lorem pellentesque at. Phasellus lobortis felis ligula, a
          congue nisi venenatis non. Donec non lorem at purus scelerisque
          laoreet eget et lorem. Aenean lectus dolor, sollicitudin sit amet
          velit nec, ultricies interdum arcu. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Phasellus ac odio sed lectus consequat sollicitudin. Curabitur nibh
          leo, laoreet eget neque vel, volutpat iaculis erat. Nullam nec posuere
          nibh. Proin dapibus non mauris sed cursus. Quisque feugiat leo quam,
          vel suscipit libero rhoncus at. Nullam tincidunt interdum ornare. Cras
          non tortor sit amet turpis cursus malesuada. Etiam justo odio, finibus
          ut suscipit eget, fermentum sit amet orci. Ut quis molestie turpis.
          Proin in porta massa. Vivamus suscipit malesuada cursus. Mauris at
          justo massa. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Ut purus orci, vestibulum eget ante ut, facilisis hendrerit
          nibh. Praesent a nibh ipsum. Ut tellus massa, malesuada vitae tortor
          vitae, consectetur suscipit velit. Integer vel leo euismod, maximus ex
          vel, ultrices quam. Phasellus congue fermentum sapien, a dapibus enim
          efficitur vel. Donec dui orci, consectetur sed porta quis, laoreet a
          dolor. Praesent placerat sagittis efficitur. Vivamus mattis libero
          vitae porttitor sagittis. Nam varius nibh non eros feugiat, sit amet
          venenatis mi mollis. Fusce felis nisi, malesuada vel felis non,
          ultrices aliquet odio. Phasellus egestas feugiat metus, sed ultrices
          massa facilisis at. Ut scelerisque magna ac ante cursus finibus. Sed
          quis est ultrices, cursus leo id, faucibus nibh. Aliquam erat
          volutpat. Curabitur non luctus tellus, sit amet viverra erat. In
          pharetra tellus fringilla tincidunt mollis. Nunc id est varius,
          volutpat ligula ac, pellentesque felis. Sed placerat libero in nibh
          laoreet pellentesque. Aenean accumsan metus dapibus gravida suscipit.
          Morbi consectetur tincidunt ante, non commodo mauris consequat eget.
          Cras quis cursus metus. Etiam non neque eu lorem lobortis lobortis.{" "}
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
