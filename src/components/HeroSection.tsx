import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles';
interface HeroSectionProps {
    showP?: boolean,
    name?: string
    description?: string
    img: string,
    txtBtn?: string,
    to?: string
}

export const HeroSection = ({ showP = false, description, img, name = 'Gabriel', txtBtn = 'contratar', to = '/contato' }: HeroSectionProps) => {

    const isRoute = to.startsWith('/')
    
    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    {showP && <p className="hero-top-data">esse sou eu</p>}
                    <h1 className="hero-heading">{name}</h1>
                    <p className="hero-para">
                        {description}
                    </p>
                    <NavLink to={`${to}`} target={isRoute ? '_self' :'_blank'}>
                        <Button className="btn hireme-btn" >
                            {txtBtn}
                        </Button>
                    </NavLink>
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
