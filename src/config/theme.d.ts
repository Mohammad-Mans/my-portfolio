/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Palette, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    bgColor: Palette["primary"];
  }

  interface PaletteOptions {
    bgColor?: PaletteOptions["primary"];
  }
}
