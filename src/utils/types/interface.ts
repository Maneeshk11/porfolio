
export interface Project {
    title: string;
    tags: string[];
    description: string;
    image: string;
    link: string;
}

export const TagColors = {
    "C++": "#b5179e",
    "Python": "#7209b7",
    "Full-stack": "#560bad",
    "Crypto": "#3a0ca3",
    "Open Source": "#3f37c9"
}

export interface Problem {
    title: string;
    problemType: string;
    tags: string[];
}