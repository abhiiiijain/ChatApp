import { ChatEngine } from "react-chat-engine";

import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="61fd9ff6-9ebb-4d41-8bfd-781930c74bea"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
