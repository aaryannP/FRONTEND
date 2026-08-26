import { useState, useRef } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const messageRef = useRef();

  return (
    <div>
      <h2>Feedback Form</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Message"
        value={message}
        ref={messageRef}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br /><br />

      <button onClick={() => messageRef.current.focus()}>
        Focus Message
      </button>
    </div>
  );
}

export default FeedbackForm;