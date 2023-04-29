import { Icon } from "@chakra-ui/react";

const Logo = ({
  height = "auto",
  width = "auto",
  color = "black",
}: {
  height?: string;
  width?: string;
  color?: string;
}) => {
  return (
    <Icon w={width} h={height} viewBox="0 0 100 100" position="relative">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="49.5" stroke={color} />
        <circle cx="50" cy="50" r="44.5" stroke={color} />
        <circle cx="50" cy="50" r="39.5" stroke={color} />
        \n <circle cx="50" cy="50" r="34.5" stroke={color} />
        <circle cx="50" cy="50" r="29.5" stroke={color} />
        <line x1="50.5" y1="20" x2="50.5" y2="79" stroke={color} />
      </svg>
    </Icon>
  );
};

export default Logo;
