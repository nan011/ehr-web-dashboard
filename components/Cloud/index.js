import styled from "styled-components";

import { Box } from "@components/index";
import { isNone } from "@helpers/utilities";

const Cloud = styled(Box)`
  position: absolute;
  ${(props) => !isNone(props.index) && `z-index: ${props.index};`}
  ${(props) => !isNone(props.top) && `top: ${props.top};`}
  ${(props) => !isNone(props.left) && `left: ${props.left};`}
  ${(props) => !isNone(props.right) && `right: ${props.right};`}
  ${(props) => !isNone(props.bottom) && `bottom: ${props.bottom};`}
`;

export default Cloud;
