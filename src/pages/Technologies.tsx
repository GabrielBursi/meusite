import styled from "styled-components";

export const Technologies = () => {
    return (
        <Wrapper className="section">
            <h2 className="common-heading">Minhas Tecnologias</h2>
            <div className="container grid grid-three-column">
                
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 9rem 0;
    background-color: ${({ theme }) => theme.colors.bg};
    
`;