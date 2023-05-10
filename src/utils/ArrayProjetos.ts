import { imgs } from "../images";
import { ProjectsData } from "../types";

export const projects: ProjectsData[] = [
    {
        id: 1,
        name: "E-commerce",
        description: "É um dos meus principais projetos, pois foi nele que apliquei todo meu conhecimento em React e APIs, é um E-commerce de produtos tecnológicos que oferece uma ampla variedade de periféricos, hardwares, computadores e vídeo-games para atender às necessidades dos usuários em relação à tecnologia. A plataforma foi desenvolvida utilizando a biblioteca React e a linguagem TypeScript, também uso Material UI para componentes prontos, oferecendo uma experiência de navegação rápida, segura e intuitiva para os usuários. Os produtos vem de uma API externa do site RapidAPI, uma API com as informações reais de produtos da Amazon. Além disso, a plataforma conta com uma API desenvolvida do zero em NodeJs e Express, também utilizando TypeScript, para garantir um alto desempenho e escalabilidade.O banco de dados não- relacional MongoDB foi escolhido para armazenamento de dados, proporcionando eficiência e flexibilidade na gestão de informações. O ecommerce oferece recursos como login e autenticação de usuário, seção de produtos favoritos, carrinho de compras e seção de pedidos, tornando o processo de compra fácil e intuitivo.A plataforma também é responsiva, adaptando-se automaticamente a diferentes tamanhos de tela, garantindo uma experiência de navegação consistente em qualquer dispositivo.",
        img: imgs.img1,
        link: "https://ecommerce-gabriel.vercel.app"
    },
    {
        id: 2,
        name: "Parceiro de Treino",
        description: "O Parceiro de Treino é um projeto que oferece uma plataforma completa para a criação e gerenciamento de exercícios físicos.Com este sistema, o usuário pode criar e excluir exercícios, além de realizar o controle e o acompanhamento dos seus treinamentos. Desenvolvido em Next com um backend em Express com TypeScript e integrado com um banco de dados MongoDB, o Parceiro de Treino oferece uma interface fácil e intuitiva para a criação e gerenciamento dos exercícios.Com a funcionalidade CRUD, é possível adicionar, visualizar, atualizar e remover exercícios facilmente. Além disso, o sistema oferece um controle de acesso e autenticação seguro para garantir a privacidade dos dados dos usuários.Com o Parceiro de Treino, o usuário tem total controle sobre o seu treinamento, podendo criar e personalizar os exercícios de acordo com as suas necessidades e objetivos, tornando- se um verdadeiro parceiro de treino para ajudar na evolução dos seus resultados.",
        img: imgs.img2,
        link: "https://parceirodetreino.vercel.app"
    },
    {
        id: 3,
        name: "Organizador de Finanças",
        description: "O meu projeto em React com TypeScript é um organizador de finanças que utiliza a biblioteca React Router Dom para criar uma experiência de navegação suave e amigável para o usuário. Com este projeto, os usuários podem criar um orçamento personalizado, adicionando nomes e preços para cada item e atualizando suas finanças ao longo do tempo. O uso de TypeScript neste projeto garante a segurança dos tipos de dados e torna o código mais legível e fácil de manter.Embora o aprimoramento na utilização da biblioteca React Router Dom seja uma meta importante, o principal objetivo do projeto é fornecer uma ferramenta eficiente e fácil de usar para que os usuários possam manter um controle preciso de suas despesas e receitas.Com esta aplicação, os usuários podem facilmente monitorar suas finanças, saber onde estão gastando mais dinheiro e fazer ajustes em suas despesas para alcançar seus objetivos financeiros. No geral, este projeto é uma solução útil e prática para ajudar as pessoas a gerenciar suas finanças de forma mais eficaz, e a sua implementação em React com TypeScript e React Router Dom garante uma experiência de usuário agradável e funcional.",
        img: imgs.img3,
        link: "https://organizador-financeiro.vercel.app"
    },
];
