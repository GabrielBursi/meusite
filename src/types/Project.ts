export interface ProjectsData {
    id: number,
    name: string,
    description: string,
    img: string,
    link: string,
    technologies: Technologies[]
}

export type Technologies = {
    name: nameTechnologies,
    img: string,
    level?: number,
}

type nameTechnologies =  "API" | "Chakra UI" | "Express" | "GraphQL" | "MongoDB" | "MySQL" | "Material UI" | "Next" | "Node" | "React" | "TypeScript"