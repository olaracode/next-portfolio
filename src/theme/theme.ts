import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      bg: "#070623",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "repeat",
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
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bgColor: "brand.bg",
        bgImage: "url('/assets/constelation.svg') !important",
        color: "brand.100",
      },
    },
  },
});
export default theme;
