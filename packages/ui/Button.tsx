type Props = {
  color:
    | "white"
    | "black"
    | "light"
    | "dark"
    | "primary"
    | "link"
    | "info"
    | "success"
    | "warning"
    | "danger";
  type: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  size?: "small" | "normal" | "medium" | "large";
  light?: boolean;
  outlined?: boolean;
  inverted?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

export function Button({
  color,
  type,
  text,
  onClick = () => {},
  light,
  size = "normal",
  fullWidth,
  outlined,
  inverted,
  disabled,
  loading,
}: Props) {
  return (
    <button
      className={`button is-${color} 
      ${light && "is-light"} is-${size} ${fullWidth && "is-fullwidth"} ${
        outlined && "is-outlined"
      } 
      ${inverted && "is-inverted"} ${loading && "is-loading"} `}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
