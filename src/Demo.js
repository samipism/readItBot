import React, { useState } from "react";
import {
  FormControl,
  Dropdown,
  InputGroup,
  Spinner,
  Button,
} from "react-bootstrap";
import { getData } from "./apiCall";

const samples = {
  ioe:
    "Pulchowk Campus is the central campus of the Institute of Engineering. It was established in 1972 (2029 B.S) as one of the constituent campuses of the Institute of Engineering and is situated at the heart of the Lalitpur city at Pulchowk. Initially, it was started for the production of trade level manpower to fulfill the nation’s need in the field of Engineering. Pulchowk campus offered diploma level (intermediate level with three years duration) courses in various engineering disciplines since 1973 (2030 BS) but diploma level courses are phased out now. Pulchowk campus has been offering bachelor’s degree courses in various engineering disciplines since 1984 (2041 BS). In year 2077 BS, online form will be published on Falgun 7, 2077. Aptitude Test for Architecture department will be conducted on Falgun 13, 2077. First list of the applicants will be published on Falgun 17. The admission will start from Falgun 18, 2077. Similarly, the second list will be published on Falgun 25, 2077.  ",
  time:
    "A long ago as 340 B.C. the Greek philosopher Aristotle, in his book On the Heavens, was able to put forward two arguments for believing that the earth was a round sphere rather than a flat plate. First, he realized that eclipses of the moon were caused by the earth coming between the sun and the moon. The earth's shadow would have been elongated and elliptical, unless the eclipse always occurred at a time when the sun was directly under the center of the disk. Second, the Greeks knew from their travels that the North Star appeared lower in the sky when viewed in the south than it did in more northerly regions. From the difference in the apparent position of the North Star in Egypt and Greece, Aristotle even quoted an estimate that the distance around the earth was 400,000 stadia. It is not known exactly what length a stadium was, but it may have been about 200 yards, which would make Aristotle's estimate about twice the currently accepted figure.",
  mahabharata:
    "The Great War, the Mahabharata, is fought at the very end of the Dwapara Yuga, the third age, just before the sinister Kali Yuga begins. Once, in the time out of mind, the Gods created the Kshatriyas to establish dharma, justice, in an anarchic world. Most royal Kshatriya bloodlines can be traced back to the Devas themselves: in the most ancient days, the Gods came freely to the earth. But in time, generations, the noble race of warrior kings had grown arrogant and greedy. By the end of the Dwapara Yuga, they had become tyrants, and were still practically invincible. Krishna, the Avatara, and his cousins, the Pandavas, were born to destroy the power of Kshatriyas of Bharatavarsha forever. This is what the Mahabharata yuddha, the war on the crack of the ages, accomplished; and thus, ushered in the Kali Yuga, modern times. By the Hindu calender, the Great War was fought some five thousand years ago.",
};

const questions = {
  ioe:
    "Which is the central campus of Institute Of Engineering?, When was Pulchowk Campus Established?, When will the first list of applicants be published?",
  time:
    "What is the length of a stadium?, Who estimated the distance around the earth?, What causes eclipses of the moon?, Who was Aristotle?, What was the distance around earth as estimated by Aristotle?, What did the Greeks know?",
  mahabharat:
    "What became of the Kshatriyas?, Why were the Pandavas born?, When was the Mahabharata fought?, What is The Great War?",
};

const Demo = () => {
  const [context, setContext] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [sample, setSample] = useState("");
  const [isAnswerFetching, setIsAnswerFetching] = useState(false);
  const onChangeText = (event, type) => {
    if (type === "context") setContext(event.target.value);
    else setQuestion(event.target.value);
    console.log(event.target.value);
  };
  const onAnswerClick = async () => {
    setIsAnswerFetching(true);

    let data = await getData(context, question);
    console.log(data);
    setAnswer(data);
    setIsAnswerFetching(false);
  };
  return (
    <div className="demo">
      <div className="h1 title" id="demo">
        Quick Demo
      </div>
      <Dropdown
        // as="select"
        onSelect={(e, x) => {
          if (e === "2") {
            setContext(samples["time"]);
            setSample(questions["time"]);
          } else if (e === "3") {
            setContext(samples["mahabharata"]);
            setSample(questions["mahabharat"]);
          } else if (e === "1") {
            setContext(samples["ioe"]);
            setSample(questions["ioe"]);
          }
        }}
      >
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Sample Paragraphs
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1">Pulchowk Campus</Dropdown.Item>
          <Dropdown.Item eventKey="2">Time</Dropdown.Item>
          <Dropdown.Item eventKey="3">Mahabharata</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* <FormControl aria-describedby="basic-addon1" /> */}
      <label htmlFor="context" className="h4">
        Context (Paragraph)
      </label>
      <InputGroup className="input">
        <FormControl
          id="context"
          as="textarea"
          value={context}
          aria-label="With textarea"
          onChange={e => onChangeText(e, "context")}
        />
      </InputGroup>
      <label htmlFor="context" className="h4">
        Question
      </label>
      {sample === "" ? (
        ""
      ) : (
        <>
          <div>{`Some sample questions: ${sample}`}</div>
          <Button onClick={() => setSample("")}> Reset Sample. </Button>
        </>
      )}
      <InputGroup className="input">
        <FormControl
          value={question}
          aria-label="With textarea"
          onChange={onChangeText}
        />
      </InputGroup>
      <div className="input">
        <Button
          variant="primary"
          type="submit"
          onClick={onAnswerClick}
          disabled={isAnswerFetching}
        >
          {isAnswerFetching && (
            <Spinner size="sm" animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
          Answer
        </Button>
      </div>

      <label htmlFor="context" className="h4 answer">
        Answer
      </label>

      <InputGroup className="input">
        <FormControl
          value={isAnswerFetching ? "" : answer}
          aria-label="With textarea"
          disabled
        />
      </InputGroup>
    </div>
  );
};

export default Demo;
