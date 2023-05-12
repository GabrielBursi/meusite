
interface TechnologiesProps {
    techs : {
        name: string;
        logo: string;
    }[]
}

export const Technologies = ({ techs }: TechnologiesProps) => {
    return (
        <div>
            {techs.map(tech => 
                <div key={tech.name}>

                </div>
            )}
        </div>
    )
}
