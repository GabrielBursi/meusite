import { projetos, tecnologias } from "../images";
import { ProjectsData } from "../types";

export const projects: ProjectsData[] = [
    {
        id: 1,
        name: "E-commerce",
        description: "É um dos meus principais projetos, pois foi nele que apliquei todo meu conhecimento em React e APIs, é um E-commerce de produtos tecnológicos que oferece uma ampla variedade de periféricos, hardwares, computadores e vídeo-games para atender às necessidades dos usuários em relação à tecnologia. A plataforma foi desenvolvida utilizando a biblioteca React e a linguagem TypeScript, também uso Material UI para componentes prontos, oferecendo uma experiência de navegação rápida, segura e intuitiva para os usuários. Os produtos vem de uma API externa do site RapidAPI, uma API com as informações reais de produtos da Amazon. Além disso, a plataforma conta com uma API desenvolvida do zero em NodeJs e Express, também utilizando TypeScript, para garantir um alto desempenho e escalabilidade.O banco de dados não- relacional MongoDB foi escolhido para armazenamento de dados, proporcionando eficiência e flexibilidade na gestão de informações. O ecommerce oferece recursos como login e autenticação de usuário, seção de produtos favoritos, carrinho de compras e seção de pedidos, tornando o processo de compra fácil e intuitivo.A plataforma também é responsiva, adaptando-se automaticamente a diferentes tamanhos de tela, garantindo uma experiência de navegação consistente em qualquer dispositivo.",
        img: projetos.img1,
        link: "https://ecommerce-gabriel.vercel.app",
        technologies: [
            {
                name: "React",
                img: tecnologias.reactLogo
            },
            {
                name: "TypeScript",
                img: tecnologias.typescriptLogo
            },
            {
                name: "Material UI",
                img: tecnologias.muiLogo
            },
            {
                name: "Node",
                img: tecnologias.nodeLogo
            },
            {
                name: "Express",
                img: tecnologias.expressLogo
            },
            {
                name: "MongoDB",
                img: tecnologias.mongodbLogo
            },
            {
                name: "API",
                img: tecnologias.apiLogo
            },
        ]
    },
    {
        id: 2,
        name: "Parceiro de Treino",
        description: "O Parceiro de Treino é um projeto que oferece uma plataforma completa para a criação e gerenciamento de exercícios físicos.Com este sistema, o usuário pode criar e excluir exercícios, além de realizar o controle e o acompanhamento dos seus treinamentos. Desenvolvido em Next com um backend em Express com TypeScript e integrado com um banco de dados MongoDB, o Parceiro de Treino oferece uma interface fácil e intuitiva para a criação e gerenciamento dos exercícios.Com a funcionalidade CRUD, é possível adicionar, visualizar, atualizar e remover exercícios facilmente. Além disso, o sistema oferece um controle de acesso e autenticação seguro para garantir a privacidade dos dados dos usuários.Com o Parceiro de Treino, o usuário tem total controle sobre o seu treinamento, podendo criar e personalizar os exercícios de acordo com as suas necessidades e objetivos, tornando- se um verdadeiro parceiro de treino para ajudar na evolução dos seus resultados.",
        img: projetos.img2,
        link: "https://parceirodetreino.vercel.app",
        technologies: [
            {
                name: "Next",
                img: tecnologias.nextLogo
            },
            {
                name: "TypeScript",
                img: tecnologias.typescriptLogo
            },
            {
                name: "Chakra UI",
                img: tecnologias.chakrauiLogo
            },
            {
                name: "Node",
                img: tecnologias.nodeLogo
            },
            {
                name: "Express",
                img: tecnologias.expressLogo
            },
            {
                name: "MongoDB",
                img: tecnologias.mongodbLogo
            }
        ]
    },
    {
        id: 3,
        name: "Organizador de Finanças",
        description: "O meu projeto em React com TypeScript é um organizador de finanças que utiliza a biblioteca React Router Dom para criar uma experiência de navegação suave e amigável para o usuário. Com este projeto, os usuários podem criar um orçamento personalizado, adicionando nomes e preços para cada item e atualizando suas finanças ao longo do tempo. O uso de TypeScript neste projeto garante a segurança dos tipos de dados e torna o código mais legível e fácil de manter.Embora o aprimoramento na utilização da biblioteca React Router Dom seja uma meta importante, o principal objetivo do projeto é fornecer uma ferramenta eficiente e fácil de usar para que os usuários possam manter um controle preciso de suas despesas e receitas.Com esta aplicação, os usuários podem facilmente monitorar suas finanças, saber onde estão gastando mais dinheiro e fazer ajustes em suas despesas para alcançar seus objetivos financeiros. No geral, este projeto é uma solução útil e prática para ajudar as pessoas a gerenciar suas finanças de forma mais eficaz, e a sua implementação em React com TypeScript e React Router Dom garante uma experiência de usuário agradável e funcional.",
        img: projetos.img3,
        link: "https://organizador-financeiro.vercel.app",
        technologies: [
            {
                name: "React",
                img: tecnologias.reactLogo
            },
            {
                name: "React Router Dom",
                img: tecnologias.reactRouterDom
            }
        ]
    },
    {
        id: 4,
        name: "Realtor",
        description: "Realtor é um aplicativo imobiliário incrível construído com Next.js, TypeScript e Chakra UI. Combinando o poder do Next.js para criar aplicativos web rápidos e escaláveis com a segurança e confiabilidade do TypeScript, o Realtor oferece uma experiência de busca de imóveis incrivelmente suave e agradável. O aplicativo consome dados de uma API externa do site Rapid API para fornecer informações precisas e atualizadas sobre casas para alugar e imóveis à venda. Com recursos avançados de filtragem de imóveis e uma página de detalhes do imóvel com um carrossel de imagens, o Realtor é a escolha perfeita para quem busca um imóvel para alugar ou comprar.Com o Next.js e TypeScript, o Realtor é altamente eficiente e escalável, oferecendo uma experiência de usuário superior em todos os dispositivos e tamanhos de tela.",
        img: projetos.img4,
        link: "https://organizador-financeiro.vercel.app",
        technologies: [
            {
                name: "Next",
                img: tecnologias.nextLogo
            },
            {
                name: "TypeScript",
                img: tecnologias.typescriptLogo
            },
            {
                name: "Chakra UI",
                img: tecnologias.chakrauiLogo
            },
            {
                name: "API",
                img: tecnologias.apiLogo
            },
        ]
    },
    {
        id: 5,
        name: "My Trips",
        description: "My Trips é um projeto feito usando Next com TypeScript, StyledComponents, e a biblioteca leaflet, juntamente com um CMS como API. A aplicação consiste em um mapa completamente dinâmico, onde o usuário pode clicar nos pins que levam para uma página com informações e fotos daquele local. Além disso, o usuário pode adicionar novas localidades no mapa. Com este projeto, tive a oportunidade de trabalhar com várias tecnologias modernas e aprimorar minhas habilidades em desenvolvimento web.",
        img: projetos.img5,
        link: "https://next-maps-gabriel.vercel.app",
        technologies: [
            {
                name: "Next",
                img: tecnologias.nextLogo
            },
            {
                name: "TypeScript",
                img: tecnologias.typescriptLogo
            },
            {
                name: "GraphQL",
                img: tecnologias.graphqlLogo
            },
            {
                name: "Leaflet",
                img: tecnologias.leafletLogo
            },
            {
                name: "Styled Components",
                img: tecnologias.styledcomponentsLogo
            },
            {
                name: "CMS",
                img: tecnologias.cmsLogo
            },
        ]
    },
];
