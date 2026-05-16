import { Box, CssBaseline } from "@mui/material";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./ThemeContext/ThemeProvider";

function App() {
    return (
        <>
            <CssBaseline />
            <ThemeProvider>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100vh",
                    }}>
                    <Header />
                    <Content />
                    <Footer />
                </Box>
            </ThemeProvider>
        </>
    );
}

export default App;
