type Props = {
  name: string;
  type: "text" | "password" | "email" | "tel";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  color?: "primary" | "info" | "success" | "warning" | "danger";
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  placeholder?: string;
  error?: boolean;
};

export function Input({
  name,
  type,
  value,
  onChange,
  color,
  size = "medium",
  rounded,
  placeholder,
  error,
}: Props) {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        className={`input ${
          color && !error ? `is-${color}` : error && "is-danger"
        } is-${size} ${rounded && `is-rounded`} mb-3`}
        type={type}
        placeholder={placeholder}
        name={name}
      />
      {error && <label>{error}</label>}
    </>
  );
}
