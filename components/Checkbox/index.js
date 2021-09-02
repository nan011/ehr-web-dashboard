import { Click, Box } from "@components/index";
import { COLORS } from "@constants/index";
import { CheckIcon } from "@icons/index";

export default function Checkbox({
  side = 20,
  isChecked = false,
  onChange = (_) => {},
}) {
  return (
    <Click
      onClick={() => onChange(!isChecked)}
      height={`${side / 16}rem`}
      width={`${side / 16}rem`}
      border={`1px solid ${COLORS.LIGHT_BLUE}`}
      radius="0.25rem"
      mainAxis="center"
      crossAxis="center"
    >
      <Box
        opacity={isChecked ? 1 : 0}
        background={COLORS.LIGHT_BLUE}
        mainAxis="center"
        crossAxis="center"
      >
        <Box transform="scale(0.45, 0.45)">
          <CheckIcon side={side} />
        </Box>
      </Box>
    </Click>
  );
}
