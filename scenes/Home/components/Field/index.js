import { useState } from "react";

import { Box, Gap, Click } from "@components/index";
import { COLORS } from "@constants/index";
import { EyeIcon } from "@icons/index";

import * as Styled from "./styled";
const isPasswordType = (type) => type.toLowerCase() === "password";

export default function Field({ type, label, onChange, Icon }) {
  const [value, setValue] = useState("");
  const [shouldShowValue, setShouldShowValue] = useState(!isPasswordType(type));

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <Box
      width="100%"
      borderBottom={`1px solid ${COLORS.GRAY}`}
      direction="row"
      mainAxis="start"
      crossAxis="center"
    >
      <Icon side={20} />
      <Gap gap={20} />
      <Box grow={0} grow={1} shrink={1} height="100%">
        <Styled.Input
          type={isPasswordType(type) && shouldShowValue ? "text" : type}
          value={value}
          onChange={handleChange}
          placeholder={label}
        />
      </Box>
      {type.toLowerCase() === "password" && (
        <>
          <Gap gap={20} />
          <Click onClick={() => setShouldShowValue(!shouldShowValue)}>
            <EyeIcon opacity={shouldShowValue ? 1 : 0.4} side={20} />
          </Click>
        </>
      )}
    </Box>
  );
}
