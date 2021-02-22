import { getData, setContext } from "./apiCall";

class ActionProvider {
  // The action provider receives createChatBotMessage which you can use to define the bots response, and
  // the setState function that allows for manipulating the bots internal state.
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleContextParser = context => {
    setContext(context);

    const messages = this.createChatBotMessage(
      "The context has been remembered.",
      {
        withAvatar: true,
        // widget: "context",
      }
    );
    this.addMessageToBotState(messages);
  };
  handleQuestionParser = async question => {
    const context = sessionStorage.getItem("Context");
    if (!context) {
      const messages = this.createChatBotMessage(
        "I guess the context has not been given. Please Provide context. Start context with ~~",
        {
          withAvatar: true,
          // widget: "context",
        }
      );
      this.addMessageToBotState(messages);
    } else {
      const messages = this.createChatBotMessage(
        await getData(context, question),
        {
          withAvatar: true,
          // widget: "context",
        }
      );
      this.addMessageToBotState(messages);
    }
  };

  handleDefault = () => {
    const message = this.createChatBotMessage("How can I help?", {
      withAvatar: true,
    });

    this.addMessageToBotState(message);
  };

  addMessageToBotState = messages => {
    if (Array.isArray(messages)) {
      this.setState(state => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState(state => ({
        ...state,
        messages: [...state.messages, messages],
      }));
    }
  };
}

export default ActionProvider;
