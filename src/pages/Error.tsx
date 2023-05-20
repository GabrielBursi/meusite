import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import { goToTop } from "../utils";

export const ErrorComponent = () => {
    return (
        <Wrapper>
            <img src="https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/error.svg" alt="error" />
            <NavLink to="/">
                <Button className="btn" onClick={goToTop}>Voltar</Button>
            </NavLink>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 9rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .btn {
        font-size: 1.8rem;
        margin-top: 3rem;
    }
`;