import * as Styled from "./styled";

export default function TextField({
  value = "",
  type = "text",
  placeholder = "",
  onChange = () => {},
  width,
}) {
  if (type === "date") {
    return <Box></Box>;
  } else {
    return (
      <Styled.Input
        type={type}
        width={width}
        placeholder={placeholder}
        value={value}
        onChange={(element) => onChange(element.target.value)}
      />
    );
  }
}
