import Image from "next/image";
import logo from "../public/logo.png";

interface LogoProps {
  height?: number;
  width?: number;
  classes?: string;
}

function Logo({ height, width, classes }: LogoProps) {
  return (
    <Image
      src={logo}
      alt="logo"
      height={height}
      width={width}
      className={classes}
    />
  );
}

export default Logo;
