import { Box, Button, Typography } from "@mui/material";
import { useExam } from "../context/useExam";

const Header = () => {
    const { timeLeft, submitExam } = useExam();
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    return (
        <Box
            sx={{
                background: "#0d47a1",

                display: "flex",

                justifyContent: "space-between",

                alignItems: "center",

                padding: 2,
            }}
        >
            <Box>
                <Typography sx={{ color: "#fff" }} variant="h5">
                    Ôn thi GPLX
                </Typography>

                <Typography
                    sx={{
                        color: "#c5c5c5",
                    }}
                    variant="h6"
                >
                    Đề thi ngẫu nhiên số 1
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",

                    gap: 2,

                    alignItems: "center",
                }}
            >
                {/* TIMER */}
                <Box
                    sx={{
                        background: "#1565c0",

                        borderRadius: 1,

                        px: 2,

                        height: "36.5px",

                        display: "flex",

                        alignItems: "center",

                        justifyContent: "center",
                    }}
                >
                    <Typography
                        sx={{
                            color: "#fff",

                            fontWeight: "bold",

                            fontSize: 16,
                        }}
                    >
                        {formattedTime}
                    </Typography>
                </Box>

                {/* SUBMIT */}
                <Button
                    variant="contained"
                    onClick={submitExam}
                    sx={{
                        background: "#4caf50",

                        color: "#fff",
                    }}
                >
                    Nộp bài
                </Button>
            </Box>
        </Box>
    );
};

export default Header;
