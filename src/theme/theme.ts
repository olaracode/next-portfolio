import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      bg: "#070623",
      primary: "#0a5c66",
      secondary: "#0a1a49",
      "secondary-accent": "#19487e",
      white: "#e7e8e4",
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
  styles: {
    global: {
      body: {
        bgColor: "brand.bg",
        color: "brand.100",
      },
    },
  },
});
export default theme;
