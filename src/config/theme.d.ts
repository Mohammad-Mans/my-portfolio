/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Palette, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }

  interface Palette {
    bgColor: Palette["primary"];
    border: Palette["primary"];
  }

  interface PaletteOptions {
    bgColor?: PaletteOptions["primary"];
    border?: PaletteOptions["primary"];
  }
}
