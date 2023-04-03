import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles';
import { useContext } from 'react';
import { ContextApp } from '../context';

export const HeroSection = () => {

    const { name, img } = useContext(ContextApp)

    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className="hero-top-data">esse sou eu</p>
                    <h1 className="hero-heading">{name}</h1>
                    <p className="hero-para">
                        Me chamo {name}, tenho 20 anos. Estudante de Eng. De Software, programador e apaixonado por tecnologia. Um dev. FullStack focado na stack de JavaScript. 
                    </p>
                    <Button className="btn hireme-btn">
                        <NavLink to="/contact"> contratar </NavLink>
                    </Button>
                </div>
                <div className="section-hero-image">
                    <picture>
                        <img src={img} alt="hero image" className="hero-img " />
                    </picture>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 9rem 0;
    .section-hero-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .btn {
        max-width: 16rem;
    }
    .hero-top-data {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.helper};
    }
    .hero-heading {
        text-transform: uppercase;
        font-size: 6.4rem;
    }
    .hero-para {
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 60rem;
    }
    .section-hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    picture {
        text-align: center;
    }
    .hero-img {
        max-width: 80%;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
        gap: 7.2rem;
        }
    }
`;
