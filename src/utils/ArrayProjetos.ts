import { imgs } from "../images";
import { ProjectsData } from "../types";

export const projects: ProjectsData[] = [
    {
        id: 1,
        name: "E-commerce Completo De Produtos",
        description: "É um dos meus principais projetos, pois foi nele que apliquei todo meu conhecimento em React e APIs, é um E-commerce de produtos tecnológicos que oferece uma ampla variedade de periféricos, hardwares, computadores e vídeo-games para atender às necessidades dos usuários em relação à tecnologia. A plataforma foi desenvolvida utilizando a biblioteca React e a linguagem TypeScript, também uso Material UI para componentes prontos, oferecendo uma experiência de navegação rápida, segura e intuitiva para os usuários. Os produtos vem de uma API externa do site RapidAPI, uma API com as informações reais de produtos da Amazon. Além disso, a plataforma conta com uma API desenvolvida do zero em NodeJs e Express, também utilizando TypeScript, para garantir um alto desempenho e escalabilidade.O banco de dados não- relacional MongoDB foi escolhido para armazenamento de dados, proporcionando eficiência e flexibilidade na gestão de informações. O ecommerce oferece recursos como login e autenticação de usuário, seção de produtos favoritos, carrinho de compras e seção de pedidos, tornando o processo de compra fácil e intuitivo.A plataforma também é responsiva, adaptando-se automaticamente a diferentes tamanhos de tela, garantindo uma experiência de navegação consistente em qualquer dispositivo.",
        img: imgs.img1,
        link: "https://ecommerce-gabriel.vercel.app"
    },
    {
        id: 2,
        name: "Parceiro de Treino",
        description: "O Parceiro de Treino é um projeto que oferece uma plataforma completa para a criação e gerenciamento de exercícios físicos.Com este sistema, o usuário pode criar e excluir exercícios, além de realizar o controle e o acompanhamento dos seus treinamentos. Desenvolvido em Next com um backend em Express com TypeScript e integrado com um banco de dados MongoDB, o Parceiro de Treino oferece uma interface fácil e intuitiva para a criação e gerenciamento dos exercícios.Com a funcionalidade CRUD, é possível adicionar, visualizar, atualizar e remover exercícios facilmente. Além disso, o sistema oferece um controle de acesso e autenticação seguro para garantir a privacidade dos dados dos usuários.Com o Parceiro de Treino, o usuário tem total controle sobre o seu treinamento, podendo criar e personalizar os exercícios de acordo com as suas necessidades e objetivos, tornando- se um verdadeiro parceiro de treino para ajudar na evolução dos seus resultados.",
        img: imgs.img3,
        link: "https://parceirodetreino.vercel.app"
    }
];