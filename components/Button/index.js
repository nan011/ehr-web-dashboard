import { useState, useEffect } from "react";

import { Click, Text, Gap } from "@components/index";
import { COLORS, FONT_WEIGHTS, SIZES } from "@constants/index";

import * as Styled from "./styled";

const ButtonType = {
  Transparent: {
    Background: COLORS.TRANSPARENT,
    TextColor: COLORS.WARM_BLACK,
  },
  Red: {
    Background: COLORS.RED,
    TextColor: COLORS.WHITE,
  },
};

Button.Type = ButtonType;

const UNCLICKABLE_BACKGROUND = COLORS.GRAY;
const UNCLICKABLE_TEXT_COLOR = COLORS.WHITE;

export default function Button({
  name = "",
  canClickByEnter = false,
  type = ButtonType.Red,
  isLoading = false,
  clickable = true,
  scale = 1,
  radius = 4,
  Icon,
  textColor,
  backColor,
  fontSize = SIZES.REGULAR,
  fontWeight = FONT_WEIGHTS.REGULAR,
  height,
  width,
  onClick = () => {},
}) {
  const [isOnClicked, setIsOnClicked] = useState(false);
  const [isOnHover, setIsOnHover] = useState(false);
  const opacity = isOnHover ? 0.8 : 1;

  useEffect(() => {
    if (canClickByEnter) {
      const clickByEnter = (e) => {
        const keynum = e.keyCode || e.which;
        if (clickable && !isLoading && keynum === 13) onClick();
      };
      document.addEventListener("keyup", clickByEnter);
      return () => document.removeEventListener("keyup", clickByEnter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickable, isLoading, canClickByEnter]);

  return (
    <Click
      shouldWithEffect={false}
      type={canClickByEnter ? "submit" : null}
      onClick={async () => {
        if (clickable && !isOnClicked && !isLoading) {
          setIsOnClicked(true);
          await onClick();
          setIsOnClicked(false);
        }
      }}
      height={height}
      width={width}
      padding={`${(16 * scale) / 16}rem ${(32 * scale) / 16}rem`}
      radius={`${radius / 16}rem`}
      border={!isOnClicked && !isLoading && `1px solid ${COLORS.RED}`}
      mainAxis="center"
      crossAxis="center"
      background={
        !isLoading && clickable
          ? backColor || type.Background
          : UNCLICKABLE_BACKGROUND
      }
      opacity={opacity}
      onMouseEnter={() => setIsOnHover(true)}
      onMouseLeave={() => setIsOnHover(false)}
    >
      {Icon && (
        <>
          <Icon height={20} />
          <Gap gap={8} axis="horizontal" />
        </>
      )}
      <Text
        weight={fontWeight}
        color={clickable ? textColor || type.TextColor : UNCLICKABLE_TEXT_COLOR}
        shouldWrap={false}
        size={fontSize}
      >
        {isOnClicked || isLoading ? (
          <Styled.Spinner src="/icons/spinner.svg" height={fontSize} />
        ) : (
          name
        )}
      </Text>
    </Click>
  );
}
