import { Text, Box, Gap } from "@components/index";
import { SIZES, COLORS } from "@constants/index";

import Choice from "./components/Choice";

export default function SingleChoice({
  choice,
  choices = [],
  label = "",
  setChoice = () => {},
}) {
  return (
    <Box width="100%" height="100%" direction="column">
      <Box>
        <Text size={SIZES.NORMAL} color={COLORS.WARM_BLACK}>
          {label}
        </Text>
        <Text size={SIZES.NORMAL} color={COLORS.RED}>
          *
        </Text>
      </Box>
      <Gap gap={16} />
      <Box
        width="100%"
        height="100%"
        direction="column"
        shouldWrap={true}
        grow={1}
        shrink={1}
      >
        {choices.map((option, index) => {
          const [optionID, label] = option;
          let gapComponent = <></>;

          if (index > 0) {
            gapComponent = <Gap gap={20} />;
          }

          return (
            <>
              {gapComponent}
              <Choice
                isSelected={optionID === choice}
                label={label}
                onClick={() => setChoice(optionID)}
              />
            </>
          );
        })}
      </Box>
    </Box>
  );
}
