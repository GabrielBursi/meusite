import styled from "styled-components";
import {BsWhatsapp} from 'react-icons/bs'

export const Contact = () => {
    return (
        <Wrapper>
            <h2 className="common-heading">Sinta-se a vontade para entrar em contato!</h2>

            <div className="container">
                <div className="contact-form">
                    <h2 className="whatsapp"> 
                        <BsWhatsapp/>
                        <a
                            href="https://wa.me/5544998811555?text=Ol%C3%A1+Gabriel%2C+estava+dando+uma+olhada+no+seu+Portf%C3%B3lio+e+achei+bem+legal%21++"
                            target="_blank"
                            rel="noopener"
                        >
                            44 9 9881-1555
                        </a>
                    </h2>
                    <form
                        action="https://formspree.io/f/mwkjrajg"
                        method="POST"
                        className="contact-inputs">
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            autoComplete="off"
                            required
                        />

                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            autoComplete="off"
                            required
                        />

                        <textarea
                            name="message"
                            cols={30}
                            rows={6}
                            autoComplete="off"
                            required></textarea>

                        <input type="submit" value="send" />
                    </form>
                </div>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234328.51678516713!2d-52.1110357195212!3d-23.410525275518232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd6ee42618c1f%3A0xc356592828e03925!2sMaring%C3%A1%20-%20Floriano%2C%20Maring%C3%A1%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1680553461940!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    .container {
        margin-top: 6rem;
        text-align: center;
        .contact-form {
            max-width: 50rem;
            margin: auto;
            margin-bottom: 2%;
            .whatsapp{
                display: flex;
                justify-content: center;
                gap: 4%;
                align-items: center;
                margin-bottom: 5%;
                font-weight: 100;
                a{
                    text-decoration: none;
                    color: black;
                    cursor: pointer;
                    &:visited{
                        color: black;
                    }
                }
            }
            .contact-inputs {
                display: flex;
                flex-direction: column;
                gap: 3rem;
                input[type="submit"] {
                cursor: pointer;
                transition: all 0.2s;
                    &:hover {
                        background-color: ${({ theme }) => theme.colors.white};
                        border: 1px solid ${({ theme }) => theme.colors.btn};
                        color: ${({ theme }) => theme.colors.btn};
                        transform: scale(0.9);
                    }
                }
            }
        }
    }
`;
