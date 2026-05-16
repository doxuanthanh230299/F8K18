import { Box, Chip, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

import type { Question } from "../types";

interface Props {
    label: string;
    question: Question;
    selectedAnswer: string;
    disabled?: boolean;
    onSelect: (answerId: string) => void;
}

const QuestionComp = ({ label, question, selectedAnswer, onSelect, disabled }: Props) => {
    return (
        <Box
            sx={{
                background: "#fff",
                borderRadius: 4,
                padding: 3,
            }}
        >
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                <Chip label={label} />

                <Typography variant="h6">{question.content}</Typography>
            </Box>

            <FormControl sx={{ width: "100%" }}>
                <RadioGroup value={selectedAnswer} onChange={(e) => onSelect(e.target.value)}>
                    {question.answers.map((answer) => {
                        const isSelected = selectedAnswer === answer.id;

                        return (
                            <Box
                                key={answer.id}
                                sx={{
                                    border: isSelected ? "2px solid #1976d2" : "2px solid #e5e5e5",

                                    background: isSelected ? "#e3f2fd" : "#fff",

                                    borderRadius: 2,
                                    p: 1,
                                    mb: 1,
                                }}
                            >
                                <FormControlLabel value={answer.id} control={<Radio />} label={answer.content} disabled={disabled} sx={{ width: "100%" }} />
                            </Box>
                        );
                    })}
                </RadioGroup>
            </FormControl>
        </Box>
    );
};

export default QuestionComp;
