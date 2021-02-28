import React from "react";
import { Card } from "react-bootstrap";
import Nirajan from "./images/Nirajan.jpg";
import Rabin from "./images/Rabin.jpg";
import Safal from "./images/Safal.png";
import Samip from "./images/4.jpg";

const Team = () => {
  return (
    <div>
      <div className="h1 title" id="team">
        Our Team
      </div>
      <div className="our-team">
        {/* <Card style={{ width: "10rem" }}> */}
        <div style={{ width: "15em" }}>
          <img alt="Nirajan" src={Nirajan} className="team-photo" />
          <Card.Body>
            <div className="h5">Nirajan Basnet</div>
          </Card.Body>
        </div>
        <div style={{ width: "15em" }}>
          <img alt="Rabin" src={Rabin} className="team-photo" />
          <Card.Body>
            <div className="h5">Rabin Adhikari</div>
          </Card.Body>
        </div>
        <div style={{ width: "15em" }}>
          <img alt="Safal" src={Safal} className="team-photo" />
          <Card.Body>
            <div className="h5">Safal Thapaliya</div>
          </Card.Body>
        </div>
        <div style={{ width: "15em" }}>
          <img alt="Samip" src={Samip} className="team-photo" />
          <Card.Body>
            <div className="h5">Samip Poudel</div>
          </Card.Body>
        </div>
      </div>
    </div>
  );
};

export default Team;
