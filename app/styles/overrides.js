import { theme, extendTheme } from "@chakra-ui/react";
import merge from "lodash/merge";

import colors from "./foundations/colors";
import sizes from "./foundations/sizes";

// components
import navbar from "./components/navbar";
import maintenance from "./components/maintenance";
import home from "./pages/home";
import projects from "./pages/projects";

export const overrides = merge(theme, {
  colors,
  sizes,
  components: { navbar, maintenance, home, projects },
});

export default extendTheme(overrides);
