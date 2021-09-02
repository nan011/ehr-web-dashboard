import { Box, Cloud, Click } from "@components/index";
import { COLORS } from "@constants/index";
import { ModalXIcon } from "@icons/index";

export default function FloatFrame({ children, onClose = () => {} }) {
  return (
    <Box
      background={COLORS.WHITE}
      padding="4rem 6rem"
      radius="0.5rem"
      height="100%"
      width="100%"
    >
      <Cloud top="1.5rem" right="2rem">
        <Click onClick={() => onClose()}>
          <ModalXIcon side={20} />
        </Click>
      </Cloud>
      {children}
    </Box>
  );
}
