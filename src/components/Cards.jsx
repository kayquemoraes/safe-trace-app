export default function Cards(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}