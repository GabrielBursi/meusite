import styled from "styled-components";
import { projects } from "../utils"
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../styles";

export const Services = () => {

    const navigate = useNavigate()

    return (
        <Wrapper className="section">
            <h2 className="common-heading">Meus Projetos</h2>
            <div className="container grid grid-three-column">
                {projects.map((project) => {
                    const { description, id, img, link, name } = project;
                    return (
                        <div key={id} className="card" onClick={() => navigate(`/projeto/${id}`)}>
                            <figure>
                                <img src={img} alt={name}/>
                            </figure>
                            <div className="card-data-wrapper">
                                <div className="card-data">
                                    <h3>{name}</h3>
                                    <div className="description-wrapper">
                                        <p>{description}</p>
                                    </div>
                                    <NavLink to={link} target="_blank">
                                        <Button className="btn">Acessar site</Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 9rem 0;
    background-color: ${({ theme }) => theme.colors.bg};
    .container {
        max-width: 120rem;
    }
    .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data-wrapper {
        height: 300px; /* altura fixa */
        overflow: hidden; /* esconder conteúdo que ultrapassa a altura */
        margin-bottom: 5%;
    }
    .card-data {
        padding: 0 2rem;
        height: 100%; /* ocupar toda a altura da div .card-data-wrapper */
        display: flex;
        flex-direction: column;
    }
    h3 {
        margin: 2rem 0;
        font-weight: 300;
        font-size: 2.4rem;
    }
    .description-wrapper {
        overflow: auto; /* permitir que o texto da descrição role dentro da div */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #d7d7d7;
            border-radius: 8px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #6254f3;
            border-radius: 8px;
            cursor: pointer;
            height: 2%;
        }
        ::-webkit-scrollbar-thumb:hover {
            background-color: #7c7c7f;
        }
    }
    .btn {
        margin: 2rem auto 0;
        background-color: rgb(0 0 0 / 0%);
        border: 0.1rem solid rgb(98 84 243);
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(98 84 243);
        font-size: 1.4rem;
        &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
        }
    }
    }
    figure {
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        transition: all 0.5s linear;
        &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.2s linear;
        cursor: pointer;
        }
        &:hover::after {
            width: 100%;
        }
        &:hover img {
            transform: scale(1.2);
        }
        img {
            max-width: 90%;
            margin-top: 1.5rem;
            height: 20rem;
            transition: all 0.2s linear;
        }
    }
    @media (max-width: ${({ theme }) => theme.media.tab}) {
        .grid-three-column {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid-two-column,
        .grid-three-column {
            grid-template-columns: 1fr;
        }
    }
`;