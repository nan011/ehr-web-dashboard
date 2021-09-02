import styled from "styled-components";

import { Box } from "@components/index";
import { COLORS, SIZES } from "@constants/index";
import { isNone } from "@helpers/utilities";

export const Input = styled.input`
  color: ${COLORS.WARM_BLACK};
  font-size: ${SIZES.REGULAR};
  width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
  background: ${COLORS.WHITE};
`;

export const CustomDatetime = styled(Box)`
  & input {
    color: ${COLORS.WARM_BLACK};
    font-size: ${SIZES.REGULAR};
    width: 100%;
    padding: 1rem;
    border-radius: 0.25rem 0 0 0.25rem;
    background: transparent;
  }
`;
