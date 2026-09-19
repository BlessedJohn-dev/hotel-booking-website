import { useOptimistic, useState } from "react";

// Simulated server action
async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 2000)); // 2-second network delay
  return message;
}

export function Thread() {
  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false },
  ]);

  // Define the optimistic state and how it merges new entries
  /*
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (currentMessages, newMessageText) => [
      ...currentMessages,
      { text: newMessageText, sending: true }, // Visual indicator that it's pending
    ],
  );
*/
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    function (currentMessages, newMessageText) {
      [
        ...currentMessages,
        { text: newMessageText, sending: true }, // Visual indicator that it's pending
      ];
    },
  );

  async function formAction(formData) {
    const messageText = formData.get("message");

    // 1. Instantly update UI with the optimistic value
    addOptimisticMessage(messageText);

    try {
      // 2. Perform the actual background network call
      const newMessage = await deliverMessage(messageText);

      // 3. Update the permanent state upon success
      setMessages((current) => [
        ...current,
        { text: newMessage, sending: false },
      ]);
    } catch (error) {
      console.error("Failed to send message", error);
      // Optional: Handle errors. React handles the state rollback automatically.
    }
  }

  return (
    <div>
      {/* Map over the optimistic state, NOT the baseline state */}
      {optimisticMessages.map((msg, index) => (
        <p key={index}>
          {msg.text} {msg.sending && <small>(Sending...)</small>}
        </p>
      ))}

      <form action={formAction}>
        <input
          type="text"
          name="message"
          placeholder="Type a message..."
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
