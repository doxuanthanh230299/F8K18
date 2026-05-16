import { Box, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../ThemeContext/useTheme";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    background: theme === "light" ? "#fff" : "#1e293b",
                    padding: '8px 20px',
                    alignItems: "center",
                }}
            >
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <MenuBookIcon sx={{ color: "#039be5" }} />
                    <Typography sx={{ fontWeight: 700, color: theme === "light" ? "#000" : "#fff" }} variant="h6">
                        Thư viện code
                    </Typography>
                </Box>
                <Box
                    onClick={toggleTheme}
                    sx={{
                        border: "1px solid #fff",
                        borderRadius: "100%",
                        background: theme === "light" ? "#e1e1e1" : "#1e293b",
                        cursor: "pointer",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {theme === "light" ? <DarkModeIcon sx={{ color: "#000" }} /> : <LightModeIcon sx={{ color: "#b28900" }} />}
                </Box>
            </Box>
        </>
    );
};

export default Header;
