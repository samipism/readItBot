import { createChatBotMessage } from "react-chatbot-kit";
import Context from "./widgets/context";

const botName = "ReadIt";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(`Hi I'm ${botName}. I’m here to show you my skill. `),
  ],
  state: {
    context: sessionStorage.getItem("Context")
      ? sessionStorage.getItem("Context")
      : "",
  },
  widgets: [
    {
      widgetName: "context",
      widgetFunc: props => <Context {...props} />,
      mapStateToProps: ["context"],
    },
  ],
};

export default config;
