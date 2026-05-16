export type Question = {
    id: string,
    content: string,
    answers: Answer[],
}

export type Answer = {
    id: string,
    content: string,
    trueAnswer?: boolean,
}