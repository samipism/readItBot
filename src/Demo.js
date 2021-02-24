import React, { useState } from "react";
import { FormControl, InputGroup, Spinner, Button } from "react-bootstrap";
import { getData } from "./apiCall";

const Demo = () => {
  const [context, setContext] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
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
      <InputGroup className="input">
        <FormControl
          value={question}
          aria-label="With textarea"
          onChange={onChangeText}
        />
      </InputGroup>
      <div className="input">
        <Button variant="primary" type="submit" onClick={onAnswerClick}>
          Answer
        </Button>
      </div>

      <label htmlFor="context" className="h4 answer">
        Answer
      </label>

      <InputGroup className="input">
        {isAnswerFetching && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
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
