import { COLORS } from "@constants/index";
import { Box, Cloud, Click } from "@components/index";

export default function Modal({
  children,
  isVisible = false,
  onClose = () => {},
  onDisappear = () => {},
}) {
  return (
    <Box width="100%" height="100%" clickable={isVisible}>
      <Cloud top={0} left={0} height="100%" width="100%">
        <Click
          height="100%"
          width="100%"
          background={COLORS.BLACK}
          opacity={isVisible ? 0.3 : 0}
          onTransitionEnd={() => {
            if (!isVisible) {
              onDisappear();
            }
          }}
          duration="0.3s"
          onClick={() => onClose()}
        />
      </Cloud>
      <Cloud
        top="50%"
        left="50%"
        transform={
          isVisible
            ? "translate(-50%, -50%)"
            : "translate(-50%, calc(-50% + 1rem))"
        }
        opacity={isVisible ? 1 : 0}
        duration="0.3s"
      >
        {children}
      </Cloud>
    </Box>
  );
}
