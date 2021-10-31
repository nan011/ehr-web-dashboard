import { COLORS, SIZES } from "@constants/index";
import styled from "styled-components";

export const InputField = styled.input`
  width: auto;
  border: 1px solid rgba(112, 112, 112, 0.3);
  border-radius: 0.25rem;
  padding: 1rem 1.25rem;
  font-size: ${SIZES.REGULAR};
  background: ${(props) =>
    props.readOnly ? COLORS.GRAY_CLOSE_TO_WHITE : "transparent"};
  color: ${(props) => (props.readOnly ? COLORS.GRAY : COLORS.WARM_BLACK)}}
`;
