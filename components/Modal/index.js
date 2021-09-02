import { FloatFrame, Cloud } from "@components/index";

export default function Modal({ children, onClose }) {
  return (
    <Cloud top="50%" left="50%" transform="translate(-50%, -50%)">
      <FloatFrame onClose={onClose}>{children}</FloatFrame>
    </Cloud>
  );
}
