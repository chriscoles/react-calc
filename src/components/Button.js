import "./Button.css";

function Button(props) {
  return (
    <button
      className="button"
      type="button"
      onClick={() => props.handler(props.label)}
      style={{ height: props.height, backgroundColor: props.backgroundColor }}
    >
      {props.label}
    </button>
  );
}

export default Button;
