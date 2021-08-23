import styled from "styled-components";

import { isNone } from "@helpers/utilities";

function getFontSize(size) {
  return !isNone(size) ? `${size}` : "20px";
}

const Text = styled.span`
  display: ${(props) =>
    props.shouldExist === undefined || props.shouldExist
      ? "inline-block"
      : "none"};
  font-size: ${(props) => getFontSize(props.size)};
  ${(props) => props.weight && `font-weight: ${props.weight};`}
  color: ${(props) => props.color || "#3d3d3d"};
  ${(props) =>
    !isNone(props.color) &&
    props.color.includes("linear-gradient") &&
    `background: ${props.color};`}
  ${(props) =>
    !isNone(props.color) &&
    props.color.includes("linear-gradient") &&
    `-webkit-background-clip: text;`}
  ${(props) =>
    !isNone(props.color) &&
    props.color.includes("linear-gradient") &&
    `-webkit-text-fill-color: transparent;`}
  ${(props) => !isNone(props.lineHeight) && `line-height: ${props.lineHeight};`}
  text-align: ${(props) => (!isNone(props.align) ? props.align : "left")};
  opacity: ${(props) => (!isNone(props.opacity) ? props.opacity : 1)};
  ${(props) => props.decoration && `text-decoration: ${props.decoration};`}
  ${(props) => props.type && `font-style: ${props.type};`}
  white-space: ${(props) =>
    isNone(props.shouldWrap) || props.shouldWrap ? "normal" : "nowrap"};
`;

export default Text;
