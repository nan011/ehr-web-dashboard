import { useEffect } from "react";

import { Text, Box, Gap } from "@components/index";
import * as Styled from "./styled";
import { SIZES, COLORS } from "@constants/index";
import { isNone } from "@helpers/utilities";

export default function TextInput({
  label = "",
  value = "",
  shouldHorizontal = false,
  onValidation = () => {},
  setValue = () => {},
  isRequired = false,
  isReadOnly = false,
}) {
  useEffect(() => {
    if (isRequired) {
      onValidation(isNone(value));
    } else {
      onValidation(true);
    }
  }, [value]);
  return (
    <Box width="100%" direction={shouldHorizontal ? "row" : "column"}>
      <Box>
        <Text size={SIZES.NORMAL} color={COLORS.WARM_BLACK}>
          {label}
        </Text>
        {isRequired && (
          <Text size={SIZES.NORMAL} color={COLORS.RED}>
            *
          </Text>
        )}
      </Box>
      <Gap gap={16} />
      <Styled.InputField
        readOnly={isReadOnly}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Box>
  );
}
