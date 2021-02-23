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
      <label htmlFor="context">Context (Paragraph)</label>
      <InputGroup>
        <FormControl
          id="context"
          as="textarea"
          value={context}
          aria-label="With textarea"
          onChange={e => onChangeText(e, "context")}
        />
      </InputGroup>
      <label htmlFor="context">Question</label>
      <InputGroup>
        {/* <InputGroup.Prepend>
          <InputGroup.Text>Question</InputGroup.Text>
        </InputGroup.Prepend> */}

        <FormControl
          //   as="text"
          value={question}
          aria-label="With textarea"
          onChange={onChangeText}
        />
      </InputGroup>
      <div>
        <Button variant="primary" type="submit" onClick={onAnswerClick}>
          Answer
        </Button>
      </div>

      <label htmlFor="context">Answer</label>

      <InputGroup>
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
