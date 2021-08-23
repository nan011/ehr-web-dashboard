import styled from "styled-components";

import { isNone } from "@helpers/utilities";
import { Box } from "@components/index";

const Click = styled(Box)`
  cursor: pointer;
  ${(props) => {
    if (!isNone(props.shouldWithEffect) && props.shouldWithEffect) {
      return `
        &:after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          opacity: 0;
          background-color: gray;
          height: 100%;
          width: 100%;
          border-radius: 200px;
          transform: translate(-50%, -50%);
  
          box-sizing: border-box;
          transition: all .1s ease-out;
        }
    
        &:hover {
          &:after {
            height: calc(100% + 15px);
            width: calc(100% + 15px);
            opacity: .05;
          }
        }
      `;
    }
    return "";
  }}
`;

export default Click;
