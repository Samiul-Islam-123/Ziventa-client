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

      <Routes>
        <Route exact path="/owner/3ddca8e6-38ef-44f7-86ad-1ae37923a80a/*" element={<Owner />}></Route>
      </Routes>


    </ThemeProvider>
  );
}

export default App;
