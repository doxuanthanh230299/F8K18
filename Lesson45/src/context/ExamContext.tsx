import { useCallback, useEffect, useState } from "react";
import { ExamContext } from "./useExam";

const INITIAL_TIME = 10;

export const ExamProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
    const [submitted, setSubmitted] = useState(false);
    const selectAnswer = (questionId: string, answerId: string) => {
        if (submitted) return;

        setAnswers((prev) => ({
            ...prev,
            [questionId]: answerId,
        }));
    };

    const submitExam = useCallback(() => {
        if (submitted) return;

        setSubmitted(true);

        alert("Nộp bài thành công!");

        setTimeout(() => {
            setAnswers({});
            setCurrentQuestion(0);
            setTimeLeft(INITIAL_TIME);
            setSubmitted(false);
        }, 500);
    }, [submitted]);
    
    useEffect(() => {
        if (submitted) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [submitted]);

    useEffect(() => {
        if (timeLeft <= 0 && !submitted) {
            setTimeout(() => {
                submitExam();
            }, 0);
        }
    }, [timeLeft, submitted, submitExam]);

    return (
        <ExamContext.Provider
            value={{
                currentQuestion,
                answers,
                timeLeft,
                submitted,
                setCurrentQuestion,
                selectAnswer,
                submitExam,
            }}
        >
            {children}
        </ExamContext.Provider>
    );
};
