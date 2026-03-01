import ChatBox from "./ChatBox";

export default function ChatSide() {
  const handleSend = (payload: {
    text: string;
    mode: "default" | "thinking";
    model: string;
  }) => {
    console.log("Send payload", payload);
  };

  return (
    <div className="flex flex-1 items-end justify-center bg-transparent px-4 pb-4 sm:px-6 sm:pb-6">
      <ChatBox onSend={handleSend} />
    </div>
  );
}
