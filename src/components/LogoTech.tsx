import styled from "styled-components"
import { Technologies } from "../types"

export const LogoTech = ({ img, name }: Technologies) => {
    return (
        <LogoWrapper>
            <div className="logo">
                <img src={img} alt={name} width="80" height="80" draggable={false} loading="lazy"/>
                <span>{name}</span>
            </div>
        </LogoWrapper>
    )
}

const LogoWrapper = styled.div`
    .logo{
        width: 100px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2%;

        span{
            font-weight: 500;
            font-size: 1.2rem;
            text-align: center;
        }
    }
`
