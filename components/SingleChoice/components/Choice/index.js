import { Text, Box, Gap, Click } from "@components/index";
import { SIZES, COLORS } from "@constants/index";
import * as CONSTANTS from "./constants";

export default function Choice({
  label,
  isSelected = false,
  onClick = () => {},
}) {
  return (
    <Click direction="row" onClick={onClick} crossAxis="center">
      <Box
        radius="100%"
        width={CONSTANTS.OUTER_CIRCLE_DIAMATER}
        height={CONSTANTS.OUTER_CIRCLE_DIAMATER}
        border={`1px solid ${COLORS.WARM_BLACK}`}
        direction="row"
        mainAxis="center"
        crossAxis="center"
      >
        <Box
          radius="100%"
          width={CONSTANTS.INNER_CIRCLE_DIAMETER}
          height={CONSTANTS.INNER_CIRCLE_DIAMETER}
          isVisible={isSelected}
          background={COLORS.WARM_BLACK}
        />
      </Box>
      <Gap gap={20} />
      <Text size={SIZES.SMALL} color={COLORS.WARM_BLACK}>
        {label}
      </Text>
    </Click>
  );
}
