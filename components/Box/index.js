import styled from "styled-components";

import { isNone } from "@helpers/utilities";

const FLEX_POSITION = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
};

const Box = styled.div`
  position: relative;
  box-sizing: border-box;
  pointer-events: ${(props) =>
    (props.isVisible === undefined || props.isVisible) &&
    (props.clickable === undefined || props.clickable)
      ? "visible"
      : "none"};
  opacity: ${(props) =>
    props.isVisible === undefined || props.isVisible ? props.opacity : 0};
  transition-timing-function: ${(props) =>
    props.timingFunction || "cubic-bezier(0.11, 1.11, 0.15, 0.99)"};
  transition-duration: ${(props) => props.duration || "0.3s"};
  animation-timing-function: ${(props) =>
    props.timingFunction || "cubic-bezier(0.11, 1.11, 0.15, 0.99)"};
  animation-duration: ${(props) => props.duration || "0.3s"};

  ${(props) => !isNone(props.background) && `background: ${props.background};`}

  ${(props) => !isNone(props.minHeight) && `min-height: ${props.minHeight};`}
    ${(props) => !isNone(props.maxHeight) && `max-height: ${props.maxHeight};`}
    ${(props) => !isNone(props.height) && `height: ${props.height};`}

    ${(props) => !isNone(props.minWidth) && `min-width: ${props.minWidth};`}
    ${(props) => !isNone(props.maxWidth) && `max-width: ${props.maxWidth};`}
    ${(props) => !isNone(props.width) && `width: ${props.width};`}

    ${(props) => !isNone(props.padding) && `padding: ${props.padding};`}
    ${(props) => !isNone(props.margin) && `margin: ${props.margin};`}
    
    ${(props) => !isNone(props.boxShadow) && `box-shadow: ${props.margin};`}
    
    ${(props) => !isNone(props.border) && `border: ${props.border};`}
    ${(props) => !isNone(props.borderTop) && `border-top: ${props.borderTop};`}
    ${(props) =>
    !isNone(props.borderRight) && `border-right: ${props.borderRight};`}
    ${(props) =>
    !isNone(props.borderBottom) && `border-bottom: ${props.borderBottom};`}
    ${(props) =>
    !isNone(props.borderLeft) && `border-left: ${props.borderLeft};`}
    ${(props) => !isNone(props.radius) && `border-radius: ${props.radius};`}
    
  display: ${(props) =>
    isNone(props.shouldExist) || props.shouldExist ? "flex" : "none"};
  flex-grow: ${(props) => (!isNone(props.grow) ? props.grow : 0)};
  flex-shrink: ${(props) => (!isNone(props.shrink) ? props.shrink : 1)};
  ${(props) => !isNone(props.align) && `align-self: ${props.align};`}
  flex-direction: ${(props) =>
    `${props.direction || "row"}${props.shouldReverse ? "-reverse" : ""}`};
  ${(props) =>
    !isNone(props.shouldExist) && props.shouldWrap && `flex-wrap: wrap;`}
  ${(props) =>
    !isNone(props.mainAxis) &&
    `justify-content: ${FLEX_POSITION[props.mainAxis]};`}
  ${(props) =>
    !isNone(props.crossAxis) &&
    `align-items: ${FLEX_POSITION[props.crossAxis]};`}
    
  transform-origin: ${(props) => props.transformOrigin || "50% 50%"};
  ${(props) => !isNone(props.transform) && `transform: ${props.transform};`}
  ${(props) => !isNone(props.clipPath) && `clip-path: ${props.clipPath};`}
`;

export default Box;
