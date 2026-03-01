import { ArrowUp, ChevronDown, Plus, X } from "lucide-react";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

type ChatMode = "default" | "thinking";

interface ChatBoxProps {
  onSend?: (payload: {
    text: string;
    mode: ChatMode;
    model: string;
    attachments?: File[];
    webSearch?: boolean;
  }) => void;
}

const MODEL_DEFAULT = "GPT-5.3-Codex";

export default function ChatBox({ onSend }: ChatBoxProps) {
  const [text, setText] = useState("");
  const [model, setModel] = useState(MODEL_DEFAULT);
  const [mode, setMode] = useState<ChatMode>("default");
  const [attachments, setAttachments] = useState<File[]>([]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hasMessage = text.trim().length > 0 || attachments.length > 0;

  const adjustTextareaHeight = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 220)}px`;
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [text]);

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed && attachments.length === 0) return;
    onSend?.({
      text: trimmed,
      mode,
      model,
      attachments: attachments.length > 0 ? attachments : undefined,
    });
    setText("");
    setAttachments([]);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-2xl text-white">
      <div className="w-full rounded-[18px] border border-white/[0.08] bg-[#131518] shadow-[0_8px_36px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.03)]">
          <label htmlFor="chat-message" className="sr-only">
            Message
          </label>
          <textarea
            ref={textareaRef}
            id="chat-message"
            value={text}
            onChange={(event) => setText(event.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Ask for follow-up changes"
            className="min-h-[40px] max-h-[104px] w-full resize-none bg-transparent px-3 pt-2.5 text-sm leading-[1.4] text-white/90 outline-none placeholder:text-white/35 sm:px-4 sm:pt-3 sm:text-base sm:leading-[1.35]"
          />

          <div className="flex items-center justify-between px-2.5 pb-2 sm:px-3 sm:pb-2.5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex h-7 w-7 items-center justify-center rounded-full text-white/55 transition-colors hover:text-white/85 sm:h-8 sm:w-8"
                aria-label="Attach files"
              >
                <Plus
                  size={18}
                  strokeWidth={1.8}
                  className="sm:h-5 sm:w-5"
                />
              </button>

              <div className="relative">
                <select
                  value={model}
                  onChange={(event) => setModel(event.target.value)}
                  className="h-7 appearance-none rounded-lg bg-transparent pl-1 pr-5 text-xs font-medium text-white/60 outline-none hover:text-white/85 sm:h-8 sm:pl-1.5 sm:pr-6 sm:text-sm"
                >
                  <option value={MODEL_DEFAULT}>{MODEL_DEFAULT}</option>
                </select>
                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-0.5 top-1/2 -translate-y-1/2 text-white/55"
                />
              </div>

              <div className="relative">
                <select
                  value={mode}
                  onChange={(event) => setMode(event.target.value as ChatMode)}
                  className="h-7 appearance-none rounded-lg bg-transparent pl-1 pr-5 text-xs font-medium text-white/60 outline-none hover:text-white/85 sm:h-8 sm:pl-1.5 sm:pr-6 sm:text-sm"
                >
                  <option value="default">Medium</option>
                  <option value="thinking">Thinking</option>
                </select>
                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-0.5 top-1/2 -translate-y-1/2 text-white/55"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleSend}
              disabled={!hasMessage}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8A8B8F] text-black transition-colors hover:bg-[#9b9ca0] disabled:cursor-not-allowed disabled:bg-[#6f7074] sm:h-9 sm:w-9"
              aria-label="Send message"
            >
              <ArrowUp
                size={16}
                strokeWidth={2.2}
                className="sm:h-5 sm:w-5"
              />
            </button>
          </div>
      </div>
    </div>
  );
}
