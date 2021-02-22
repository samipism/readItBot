class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    // State represents the chatbot state and is passed
    // in at initalization. You can use it to read chatbot state
    // inside the messageParser
    this.state = state;
  }

  parse = message => {
    const lowerCase = message.toLowerCase();
    let token;
    let mode = -1;
    if (
      lowerCase[0] === "~" &&
      lowerCase[1] === "~" &&
      lowerCase[2] === " " &&
      lowerCase.length > 3
    ) {
      mode = 0;
      token = lowerCase.substring(3, lowerCase.length - 1);
    } else if (
      lowerCase[0] === "=" &&
      lowerCase[1] === ">" &&
      lowerCase[2] === " " &&
      lowerCase.length > 3
    ) {
      mode = 1;
      console.log(mode);
      token = lowerCase.substring(3, lowerCase.length - 1);
    }

    if (mode === 0) {
      this.actionProvider.handleContextParser(token);
    } else if (mode === 1) {
      this.actionProvider.handleQuestionParser(token);
    } else {
      this.actionProvider.handleDefault();
    }
  };
}

export default MessageParser;
