type Props = {
  letter: string;
};

export function Divider({ letter }: Props) {
  return (
    <div className="column is-10 is-offset-1">
      <span
        style={{
          backgroundColor: "#eaeaea",
          marginBottom: "1px",
        }}
        className="tag is-large is-fullwidth"
        id={letter}
      >
        {letter}
      </span>
      <div
        className="divider"
        style={{
          height: "1px",
          backgroundColor: "#eaeaea",
          marginBottom: "1rem",
        }}
      ></div>
    </div>
  );
}
