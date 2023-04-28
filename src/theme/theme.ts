import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./globalStyles";
import { colors } from "./colorPalette";
import { Button } from "./base";
const theme = extendTheme({
  styles: globalStyles,
  colors: {
    brand: colors,
  },
  components: {
    Button,
  },
});
export default theme;
