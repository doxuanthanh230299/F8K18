import { Box } from "@mui/material";
import QuestionComp from "./QuestionComp";
import { questions } from "../data/questions";
import { useExam } from "../context/useExam";

const Container = () => {
    const {
        currentQuestion,
        answers,
        selectAnswer,
    } = useExam();

    const question = questions[currentQuestion];

    return (
        <Box
            sx={{
                background: "#e5e5e5",
                height: "100%",
                padding: 4,
            }}
        >
            <QuestionComp
                label={`Câu ${
                    currentQuestion + 1
                }`}
                question={question}
                selectedAnswer={
                    answers[question.id] || ""
                }
                onSelect={(answerId) =>
                    selectAnswer(
                        question.id,
                        answerId
                    )
                }
            />
        </Box>
    );
};

export default Container;