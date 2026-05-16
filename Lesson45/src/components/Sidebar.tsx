import {
    Box,
    Button,
    Typography,
} from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { questions } from "../data/questions";
import { useExam } from "../context/useExam";

const Sidebar = () => {
    const {
        currentQuestion,
        setCurrentQuestion,
        answers,
    } = useExam();

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleNext = () => {
        if (
            currentQuestion <
            questions.length - 1
        ) {
            setCurrentQuestion(
                currentQuestion + 1
            );
        }
    };

    return (
        <Box
            sx={{
                background: "#fff",
                padding: 2,
                height: "100%",
            }}
        >
            {/* NAVIGATION */}
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    mb: 3,
                }}
            >
                <Button
                    fullWidth
                    variant="contained"
                    startIcon={
                        <ArrowBackIosIcon />
                    }
                    onClick={handlePrev}
                    disabled={
                        currentQuestion === 0
                    }
                >
                    Câu trước
                </Button>

                <Button
                    fullWidth
                    variant="contained"
                    endIcon={
                        <ArrowForwardIosIcon />
                    }
                    onClick={handleNext}
                    disabled={
                        currentQuestion ===
                        questions.length - 1
                    }
                >
                    Câu tiếp
                </Button>
            </Box>

            {/* QUESTION LIST */}
            <Typography
                variant="h6"
                sx={{ mb: 2 }}
            >
                Danh sách câu hỏi
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(5, 1fr)",

                    gap: 1,
                    mb: 3,
                }}
            >
                {questions.map(
                    (question, idx) => {
                        const answered =
                            !!answers[
                                question.id
                            ];

                        const active =
                            currentQuestion ===
                            idx;

                        return (
                            <Button
                                key={question.id}
                                variant="outlined"
                                onClick={() =>
                                    setCurrentQuestion(
                                        idx
                                    )
                                }
                                sx={{
                                    minWidth: 0,

                                    color:
                                        active
                                            ? "#fff"
                                            : "#000",

                                    border:
                                        active
                                            ? "2px solid #ffc107"
                                            : "1px solid #e5e5e5",

                                    backgroundColor:
                                        active
                                            ? "#ffc107"
                                            : answered
                                            ? "#1976d280"
                                            : "#fff",

                                    "&:hover":
                                        {
                                            backgroundColor:
                                                active
                                                    ? "#ffb300"
                                                    : answered
                                                    ? "#1976d2"
                                                    : "#f5f5f5",
                                        },
                                }}
                            >
                                {idx + 1}
                            </Button>
                        );
                    }
                )}
            </Box>

            {/* LEGEND */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection:
                        "column",
                    gap: 1,
                }}
            >
                <LegendItem
                    color="#e5e5e5"
                    label="Chưa trả lời"
                />

                <LegendItem
                    color="#1976d280"
                    label="Đã trả lời"
                />

                <LegendItem
                    color="#ffc107"
                    label="Đang chọn"
                />
            </Box>
        </Box>
    );
};

interface LegendItemProps {
    color: string;
    label: string;
}

const LegendItem = ({
    color,
    label,
}: LegendItemProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
            }}
        >
            <Box
                sx={{
                    width: 20,
                    height: 20,
                    borderRadius: 1,
                    backgroundColor: color,
                    border: `2px solid ${color}`,
                }}
            />

            <Typography variant="caption">
                {label}
            </Typography>
        </Box>
    );
};

export default Sidebar;