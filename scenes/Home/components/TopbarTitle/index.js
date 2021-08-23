import { Box, Text, Click, Gap } from "@components/index";
import { COLORS, SIZES, FONT_WEIGHTS } from "@constants/index";

export default function TopbarTitle({
  name,
  onClick = () => {},
  shouldHighlight = true,
}) {
  return (
    <Click
      padding="0 1rem"
      direction="column"
      crossAxis="center"
      onClick={onClick}
    >
      <Text
        size={SIZES.NORMAL}
        weight={shouldHighlight ? FONT_WEIGHTS.BOLD : FONT_WEIGHTS.REGULAR}
        color={shouldHighlight ? COLORS.BLUE : COLORS.WARM_BLACK}
      >
        {name}
      </Text>
      <Gap gap={8} />
      <Box
        duration="0.5s"
        transformOrigin="0 50%"
        transform={`scaleX(${shouldHighlight ? "1" : "0"})`}
        width="calc(100% + 1.5rem)"
        height="5px"
        background={COLORS.BLUE}
      />
    </Click>
  );
}
