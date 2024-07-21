import { theme, extendTheme } from "@chakra-ui/react";
import merge from "lodash/merge";

import colors from "./foundations/colors";
import sizes from "./foundations/sizes";

// components
import navbar from "./components/navbar";
import maintenance from "./components/maintenance";

export const overrides = merge(theme, {
  colors,
  sizes,
  components: { navbar, maintenance },
});

export default extendTheme(overrides);
