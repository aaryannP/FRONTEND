import { createContext, useContext } from "react";

const NotificationContext = createContext(5);

function NotificationDemo() {
  const count = useContext(NotificationContext);

  return (
    <NotificationContext.Provider value={5}>
      <Message />
    </NotificationContext.Provider>
  );
}

function Message() {
  const count = useContext(NotificationContext);

  return <h2>Unread Messages: {count}</h2>;
}

export default NotificationDemo;