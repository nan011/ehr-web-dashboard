export default function Gap({ gap }) {
  return (
    <span
      style={{
        display: "block",
        padding: `${gap / 16 / 2}rem ${gap / 16 / 2}rem`,
      }}
    ></span>
  );
}
