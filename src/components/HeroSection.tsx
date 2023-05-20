import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles';
import { ProjectsData } from '../types';
import { LogoTech } from './LogoTech';
import { goToTop } from '../utils';
interface HeroSectionProps {
    project: ProjectsData
    showP?: boolean,
    txtBtn?: string,
    to?: string,
    showTechnologies?: boolean
}

export const HeroSection = ({ project, showP = false, txtBtn = 'contratar', to = '/contato', showTechnologies = false }: HeroSectionProps) => {

    const isRoute = to.startsWith('/')

    const paragraphs = project.description.split('\n');

    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    {showP && <p className="hero-top-data">esse sou eu</p>}
                    <h1 className="hero-heading">{project.name}</h1>
                    {paragraphs.map((paragraph, index) => (
                        <p className="hero-para" key={index}>
                            {paragraph}
                        </p>
                    ))}
                    <NavLink to={`${to}`} target={isRoute ? '_self' : '_blank'}>
                        <Button className="btn hireme-btn" onClick={goToTop}>
                            {txtBtn}
                        </Button>
                    </NavLink>
                </div>
                <div className="section-hero-image">
                    <picture>
                        <img src={project.img} alt="hero image" className={!showTechnologies ? "hero-img" : "hero-img-2"} />
                    </picture>
                    {showTechnologies &&
                        <div className='technologies'>
                            <h2 className="hero-sub-heading">Tecnologias Usadas</h2>
                            <div className="grid-technologies">
                                {project.technologies.map(tec =>
                                    <LogoTech key={tec.img} img={tec.img} name={tec.name} />
                                )}
                            </div>
                        </div>
                    }
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
        margin-top: 2rem;
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
        max-width: 60rem;
    }
    .section-hero-image {
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 5%;
        align-items: center;
    }
    .technologies{
        width: 80%;
        height: auto;
    }
    .hero-sub-heading {
        text-transform: uppercase;
        font-size: 2.4rem;
        margin-bottom: 4%;
    }
    .grid-technologies {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        justify-items: center;
        align-items: center;
    }
    picture {
        text-align: center;
    }
    .hero-img {
        border-radius: 50%;
        height: 400px;
    }
    .hero-img-2{
        max-width: 80%;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
        gap: 7.2rem;
        }
    }
`;
