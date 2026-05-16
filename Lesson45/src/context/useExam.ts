import { createContext, useContext } from "react";

interface ExamContextType {
    currentQuestion: number;
    answers: Record<string, string>;
    timeLeft: number;    
    submitted: boolean;  
    setCurrentQuestion: (index: number) => void;
    selectAnswer: (
        questionId: string,
        answerId: string
    ) => void;

    submitExam: () => void;
}

export const ExamContext = createContext<ExamContextType | undefined>(undefined);

export const useExam = () => {
    const context = useContext(ExamContext);
    if (!context) {
        throw new Error("useExam must be used within ExamProvider");
    }

    return context;
};