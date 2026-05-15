import type { CSSProperties, ReactNode } from "react";

export interface Column {
    value: string;
    text: string;
    style?: CSSProperties;
}

export interface Row {
    id: number;
    [key: string]: ReactNode;
}