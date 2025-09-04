"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@/theme";
import { Web3Provider } from "@/lib/wallet";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Web3Provider>{children}</Web3Provider>
    </ThemeProvider>
  );
}
