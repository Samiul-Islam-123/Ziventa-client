import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles"; // Import createTheme from @mui/material/styles
import DesktopNavBar from "./UIComponents/NavBar/DesktopNavBar";
import NavBar from "./UIComponents/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Owner from "./Owner/Owner";

const theme = createTheme({
  palette: {
    mode: "dark", // Set the dark mode in the palette
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <NavBar />




    </ThemeProvider>
  );
}

export default App;
