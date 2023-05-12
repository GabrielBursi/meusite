import styled from "styled-components"
import { Technologies } from "../types"

export const LogoTech = ({ img, name }: Technologies) => {
    return (
        <LogoWrapper>
            <div className="logo">
                <div className="img-container">
                    <img src={img} alt={name} width="100%" height="100%" draggable={false} loading="lazy"/>
                </div>
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

        .img-container{
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        span{
            font-weight: 500;
            font-size: 1.2rem;
            text-align: center;
        }
    }
`
