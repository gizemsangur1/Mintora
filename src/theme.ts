"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7C3AED", 
    },
    secondary: {
      main: "#06B6D4",
    },
    background: {
      default: "#111827", 
      paper: "#1F2937",   
    },
    warning: {
      main: "#FACC15", 
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    h1: {
      fontFamily: "Orbitron, sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Orbitron, sans-serif",
      fontWeight: 600,
    },
  },
});
