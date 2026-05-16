import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import { ExamProvider } from "./context/ExamContext";

function App() {
    return (
        <>
            <CssBaseline />
            <ExamProvider>
                <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
                    <Header />
                    <Box
                        sx={{
                            width: "100%",
                            flex: 1,
                            display: "grid",
                            gridTemplateColumns: "1fr 500px",
                            gap: 2,
                            background: "#e5e5e5",
                        }}
                    >
                        <Container />
                        <Sidebar />
                    </Box>
                </Box>
            </ExamProvider>
        </>
    );
}

export default App;
