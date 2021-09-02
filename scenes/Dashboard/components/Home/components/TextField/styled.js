import styled from "styled-components";

import { COLORS, SIZES } from "@constants/index";
import { isNone } from "@helpers/utilities";

export const Input = styled.input`
  padding: 1.25rem 1rem;
  width: ${(props) => (!isNone(props.width) ? props.width : `100%`)};
  color: ${COLORS.WARM_BLACK};
  font-size: ${SIZES.NORMAL};
  border-radius: 0.25rem;
`;
