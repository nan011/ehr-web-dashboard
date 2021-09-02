import styled from "styled-components";

import { Box } from "@components/index";
import { COLORS } from "@constants/index";

export const Table = styled(Box)`
  display: table;
  width: 100%;
  z-index: 0;
  position: relative;
`;

export const Header = styled(Box)`
  position: sticky;
  top: 0;
`;

export const Body = styled(Box)`
  ${(props) => props.height && "overflow-y: auto"};
  ${(props) => props.height && "padding-right: -12px"};

  flex-direction: column;

  /* width */
  ::-webkit-scrollbar {
    position: absolute;
    margin-r: 6px;
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${COLORS.LIGHT_BLUE};
    border-radius: 1000px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${COLORS.LIGHT_BLUE};
  }
`;

export const Cell = styled(Box)`
  flex: ${(props) => props.width || 1} 1 ${(props) => props.width || 0};
  flex-wrap: wrap;
  white-space: normal;
  word-break: break-word;
  overflow: hidden;
`;
