import { Box, Typography } from "@mui/material";
import { useTheme } from "../ThemeContext/useTheme";

const Footer = () => {
    const { theme } = useTheme();
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    background: theme === "light" ? "#fff" : "#1e293b",
                    padding: "8px 20px",
                    alignItems: "center",
                }}>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 700, color: theme === "light" ? "#000" : "#fff" }} variant="h6">
                        Bản quyền © 2026
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
