export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} style={{ backgroundColor: props.color }}>
      {props.title}
      </button>
    </div>
  );
  }