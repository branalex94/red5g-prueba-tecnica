export default function TableHeader({ text, onClick = null }) {
  return (
    <th onClick={onClick}>
      {text}
      <i className="fa-solid fa-up-down"></i>
    </th>
  );
}
