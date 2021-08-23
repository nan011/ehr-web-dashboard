import Image from "next/image";
import { Box } from "@components/index";

export default function Icon({ src, opacity, height, width, side, ...props }) {
  return (
    <Box opacity={opacity}>
      <Image
        src={src}
        height={side || height}
        width={side || width}
        {...props}
      />
    </Box>
  );
}
