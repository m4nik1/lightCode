interface ChatDropDownProps {
  options: string[];
}

export default function ChatDropDown(props: ChatDropDownProps) {
  return (
    <select>
      {props.options.map((o, i) => (
        <option key={i} value={o}>
          o
        </option>
      ))}
    </select>
  );
}
