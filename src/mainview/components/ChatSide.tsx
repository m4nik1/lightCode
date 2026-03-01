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
      <div>
        <select className="glass-row mt-2 w-full rounded-md bg-[#131518] px-3 py-2 text-sm text-white/90">
          <option value="gpt-3.5">GPT-3.5</option>
          <option value="gpt-4">GPT-4</option>
          <option value="custom-model">Custom Model</option>
        </select>
      </div>
    </div>
  );
}
