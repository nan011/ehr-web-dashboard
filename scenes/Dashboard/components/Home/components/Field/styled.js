import styled from "styled-components";

import { Box } from "@components/index";
import { COLORS, SIZES } from "@constants/index";

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
    placeholder ${(props) => props.placeholder}
    color: ${COLORS.WARM_BLACK};
    font-size: ${SIZES.REGULAR};
    width: 100%;
    padding: 1rem;
    border-radius: 0.25rem 0 0 0.25rem;
    background: transparent;
  }

  .rdtPicker {
    width: 280px;
    font-family: Lato !important;
    font-size: 0.75rem;
    padding: 1rem;
    margin: 1rem 0 0 0;
    border-radius: 0.25rem;
  }

  thead {
    tr:nth-child(1) {
      height: 4rem;
      font-size: 1.25rem;

      th {
        vertical-align: middle;
      }
    }

    tr:nth-child(2) {
      font-size: 1rem;
      color: ${COLORS.GRAY}
    }
  }

  .rdtDay,
  .rdtMonth,
  .rdtYear,
  .rdtSwitch {
    &:hover {
      border-radius: 1000px;
    }
  }

  .rdtActive {
    background: ${COLORS.RED};
    border-radius: 1000px;
  }

  td.rdtDay {
    height: 2.5rem;
    width: 2.5rem;
  }
`;
