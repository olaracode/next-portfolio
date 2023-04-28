const Button = {
  baseStyle: {
    fontWeight: "bold",
    bgColor: "brand.primary",
    color: "brand.bg",
    borderRadius: "12px",
    _focus: {
      boxShadow: "none",
    },
  },
  variants: {
    primary: {
      bg: "primary",
      color: "white",
      _hover: {
        bg: "primaryHover",
      },
    },
    secondary: {
      bg: "secondary",
      color: "white",
      _hover: {
        bg: "secondaryHover",
      },
    },
    ghost: {
      bg: "transparent",
      border: "1px solid",
      borderColor: "tranparent",
      _hover: {
        bg: "transparent",
        borderColor: "brand.white",
      },
    },
  },
};
export default Button;
