import { useRef, useState, useCallback } from "react";
import Datetime from "react-datetime";

import { Box, Gap, Click, Cloud } from "@components/index";
import { DownArrowIcon } from "@icons/index";
import { COLORS } from "@constants/index";
import "react-datetime/css/react-datetime.css";

import * as Styled from "./styled";

export default function Field({
  value = "",
  type = "text",
  placeholder = "",
  onChange = () => {},
  width,
}) {
  const inputRef = useRef();
  const [dateIsOpened, setDateIsOpened] = useState(false);

  const handleClick = () => {
    if (type === "date") {
      setDateIsOpened(!dateIsOpened);
    }

    if (inputRef) {
      inputRef.current.focus();
    }
  };

  if (type === "date") {
    return (
      <Click radius="0.25rem" background={COLORS.WHITE} width="100%">
        <Styled.CustomDatetime>
          <Datetime
            dateFormat="DD MMM YYYY"
            timeFormat={false}
            onOpen={() => setDateIsOpened(true)}
            onClose={() => setDateIsOpened(false)}
            closeOnClickOutside={() => setDateIsOpened(false)}
          />
        </Styled.CustomDatetime>
        <Box
          transform={`rotateZ(${dateIsOpened ? 0 : -90}deg)`}
          margin="0 1rem"
        >
          <DownArrowIcon side={16} />
        </Box>
      </Click>
    );
  }

  return <Styled.Input placeholder={placeholder} value={value} />;
}
