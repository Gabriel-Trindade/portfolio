"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/header";
import { FaHtml5, FaCss3Alt, FaReact, FaAws } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import {
  SiJavascript,
  SiNextdotjs,
  SiCakephp,
  SiPhp,
  SiMysql,
  SiCsharp,
} from "react-icons/si";
import { color, motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  useEffect(() => {
    let timer;
    if (enviado) {
      timer = setTimeout(() => {
        setEnviado(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [enviado]);

  const enviarEmail = async () => {
    try {
      setLoading(true); // Ativar o loader
      console.log(formData);
      const response = await fetch("/api/enviar-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Lógica para tratar o sucesso do envio de email
        console.log("Email enviado com sucesso!");
        setEnviado(true);
      } else {
        // Lógica para tratar falhas no envio de email
        console.error("Erro ao enviar email.", response);
        setErro(true);
      }
    } catch (error) {
      // Lógica para tratar erros de rede ou do servidor
      console.error("Erro ao enviar email:", error);
    } finally {
      setLoading(false); // Desativar o loader após o envio
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    enviarEmail();
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header
        toggleMenu={toggleMenu}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        menuOpen={menuOpen}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className={`flex flex-col items-center justify-center min-h-screen ${
          darkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <div className="min-h-screen flex flex-col items-center justify-center text-black w-full">
          <div
            className={`max-w-full mx-auto p-8 sobre-mim ${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
            } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}
          >
            <div className="col-span-1 flex flex-col items-center">
              <Image
                src="/eu.png"
                alt="Imagem de Perfil"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <h1
                className={
                  darkMode
                    ? "text-gray-300 text-5xl font-bold text-center mb-4 mt-4"
                    : "text-black text-5xl font-bold text-center mb-4 mt-4"
                }
              >
                Gabriel Trindade
              </h1>
              <p className="text-lg text-center mb-4 ml-4">
                Desenvolvedor de sistemas
              </p>
              <div className="flex flex-col items-start ml-4">
                <h3 className="text-2xl font-bold mb-2">
                  Ferramentas Front-end:
                </h3>
                <p className="text-lg mb-4">
                  HTML5, CSS3, Javascript ES6+, jQuery, React.Js (+ Next.js),
                  React Native, CakePHP
                </p>
                <h3 className="text-2xl font-bold mb-2">
                  Ferramentas Back-end:
                </h3>
                <p className="text-lg mb-4">PHP, CakePHP, MySQL, C#, AWS</p>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2 ml-4 lg:ml-0 lg:w-full">
              <h3
                className={
                  darkMode
                    ? "text-white text-2xl font-bold mb-2 text-center"
                    : "text-black text-2xl font-bold mb-2 text-gray-800 text-center"
                }
              >
                Resumo:
              </h3>
              <p
                className={
                  darkMode
                    ? "text-white text-xl text-justify"
                    : "text-black text-xl text-gray-800 text-justify"
                }
              >
                Olá, sou Gabriel, um desenvolvedor com dois anos de experiência
                e formação pela Universidade Paulista. Tenho especialização em
                desenvolvimento frontend web e mobile, utilizando tecnologias
                como HTML, CSS, jQuery, Bootstrap, CakePHP, React.js e React
                Native. Tenho um forte interesse em explorar novas tecnologias
                para criar soluções inovadoras e eficazes. Além disso, possuo
                uma sólida base em desenvolvimento backend, com foco em C# e
                Node.js, e experiência em bancos de dados MySQL e AWS para
                computação em nuvem. Também domino ferramentas como Wordpress,
                Tailwind CSS, Next.JS e possuo habilidades em design utilizando
                Figma. No âmbito das competências comportamentais, destaco-me
                pela comunicação eficaz, capacidade de trabalho em equipe,
                adaptabilidade, habilidade na resolução de problemas, pensamento
                crítico, proatividade e organização. Sou também experiente em
                metodologias como SCRUM e em práticas de integração
                contínua/distribuição contínua (CI/CD). Estou sempre em busca de
                desafios estimulantes e oportunidades para contribuir com meu
                conhecimento e habilidades no desenvolvimento de projetos de
                alta qualidade.
              </p>

              <div className="flex justify-around place-items-end mt-20">
                <FaHtml5 className="w-12 h-12 text-orange-500" />
                <FaCss3Alt className="w-12 h-12 text-blue-500" />
                <SiJavascript className="w-12 h-12 text-yellow-500" />
                <DiJqueryLogo className="w-12 h-12 text-blue-300" />
                <FaReact className="w-12 h-12 text-blue-500" />
                <SiNextdotjs className="w-12 h-12 text-blue-600" />
                <SiCakephp className="w-12 h-12 text-purple-700" />
                <SiPhp className="w-12 h-12 text-purple-900" />
                <SiMysql className="w-12 h-12 text-blue-500" />
                <SiCsharp className="w-12 h-12 text-purple-900" />
                <FaAws className="w-12 h-12 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Div de projetos */}
        <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 projetos">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`rounded-lg p-6 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              InnovateTech
            </h2>
            <div className="flex flex-col items-center mb-4">
              <Image
                src="/innovateThumb.png" // Caminho da imagem mobile
                alt="Imagem do projeto mobile"
                width={200}
                height={300} // Altura ajustada para uma proporção mais vertical
                className="mb-4 rounded-lg thumb-image"
              />
              <p>
                A InnovateTech, uma empresa líder em tecnologia educacional,
                está empenhada em um projeto inovador em colaboração com sua
                comunidade de educadores para simplificar a gestão e
                visualização das informações dos alunos de forma intuitiva em
                uma aplicação móvel. O objetivo principal deste projeto é
                desenvolver um aplicativo que consumirá a API da randomuser e
                irá exibir informações importantes para o usuário.
              </p>
            </div>
            <a
              href="https://github.com/Gabriel-Trindade/innovateTech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Ver no GitHub
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`rounded-lg p-6 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-center">iStorm RH</h2>
            <div className="flex flex-col items-center mb-4">
              <Image
                src="/iStormThumb.png" // Caminho da imagem web
                alt="Imagem do projeto web"
                width={700}
                height={700} // Altura ajustada para uma proporção mais horizontal
                className="mb-4 rounded-lg thumb-image"
              />
              <p>
                iStorm RH é uma empresa fictícia de cadastro de folhas de
                pagamento de uma empresa. Tecnologias utilizadas na construção
                do front: React.Js, Material UI, TailWind, Next.JS. o Site
                consome uma API baseada em Node.Js hospedada em um servidor,
                onde ele realiza todos os cruds de entrada e saída de dados do
                site. O Banco de dados utilizado foi o MySQL. O sistema de login
                é feito por token. Caso tenha interesse em vê-lo funcionando,
                contate-me para a ativação do backend.
              </p>
            </div>
            <a
              href="https://github.com/Gabriel-Trindade/PIM-IV---Frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Ver no GitHub
            </a>
            <br></br>
            <a
              href="https://github.com/Lukas18007/PIM-IV---Backend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Ver o backend do projeto
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`rounded-lg p-6 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              iStorm Imports
            </h2>
            <div className="flex flex-col items-center mb-4">
              <Image
                src="/iStormImportsThumb.png" // Caminho da imagem mobile
                alt="Imagem do projeto mobile"
                width={700}
                height={700} // Altura ajustada para uma proporção mais vertical
                className="mb-4 rounded-lg thumb-image"
              />
              <p>
                O programa foi feito visto a necessidade de uma startup de
                dropshipping obter mais controle sob suas vendas, algo que é
                muito necessário quando uma empresa utiliza esse método de
                vendas, pois há uma baixa porcentagem de lucro e é relativamente
                fácil de perder o controle das vendas. Visto isso criamos a
                funcionalidade do programa, de um funcionário cadastrar um
                produto, dizer seu fornecedor, preço de custo e preço de venda e
                salvar isso em um arquivo .txt Também implementamos funções
                extras como o papel da secretária que poderá marcar reuniões e o
                admin que consegue checar todos os .txt's criados. Os arquivos
                seriam salvos em um NAS que por meio de um servidor local, e
                podem ser visualizados pelos administradores da empresa que
                farão as contas necessárias para o controle de gastos da
                empresa. No caso fictício, utilizamos um lucro de 40% a cada
                produto vendido na empresa, que pode ser alterado no código caso
                a empresa deseja aumentar ou diminuir essa porcentagem.
              </p>
            </div>
            <a
              href="https://github.com/Gabriel-Trindade/PIM-II-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Ver no GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className={`mt-12 max-w-4xl mx-auto flex justify-center items-center h-dvh contato ${
            darkMode ? "bg-gray-900" : "bg-gray-100"
          }`}
        >
          <form
            className="flex flex-col w-full sm:max-w-md p-4 border rounded-lg shadow-lg space-y-2 md:space-y-4"
            onSubmit={handleSubmit}
          >
            <div
              className={`text-3xl font-bold mb-4 text-center ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Me mande uma mensagem!
            </div>
            <label
              htmlFor="name"
              className={`text-xl ${darkMode ? "text-white" : "text-black"}`}
            >
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.nome}
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Digite seu nome"
            />

            <label
              htmlFor="email"
              className={`text-xl ${darkMode ? "text-white" : "text-black"}`}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Digite seu email"
            />

            <label
              htmlFor="message"
              className={`text-xl ${darkMode ? "text-white" : "text-black"}`}
            >
              Mensagem:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.mensagem}
              onChange={(e) =>
                setFormData({ ...formData, mensagem: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Digite sua mensagem"
            />

            <button
              type="submit"
              className={`w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Enviar Mensagem
            </button>
          </form>
          {loading && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
              <div
                className="spinner-border text-blue-500 h-12 w-12"
                role="status"
              >
                <span className="sr-only">Carregando...</span>
              </div>
            </div>
          )}
          {enviado && (
            <div className="fixed inset-x-0 bottom-0 p-4 bg-green-500 text-white font-bold flex justify-center items-center z-50">
              <div>Email enviado com sucesso!</div>
            </div>
          )}
          {erro && (
            <div className="fixed inset-x-0 bottom-0 p-4 bg-red-500 text-white font-bold flex justify-center items-center z-50">
              <div>Erro ao enviar email.</div>
            </div>
          )}
        </motion.div>
      </motion.div>

      <footer className={`${darkMode ? "bg-gray-900" : "bg-white"}`}>
        <div
          className={`max-w-4xl mx-auto p-4 text-center ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <p>
            Feito com{" "}
            <span role="img" aria-label="Coração">
              ❤️
            </span>{" "}
            por Gabriel Trindade
          </p>
          <p className="mt-2">
            Conecte-se comigo:
            <a
              href="https://github.com/Gabriel-Trindade"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 text-blue-500 hover:underline ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <FaGithub className="inline-block mr-1" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-trindadev/"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 text-blue-500 hover:underline ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <FaLinkedin className="inline-block mr-1" /> LinkedIn
            </a>
          </p>
          <p className={`mt-2 ${darkMode ? "text-white" : "text-black"}`}>
            Sou um desenvolvedor apaixonado por criar soluções inovadoras e
            eficazes utilizando as mais recentes tecnologias. Estou sempre em
            busca de novos desafios e oportunidades para aprender e crescer
            profissionalmente.
          </p>
        </div>
      </footer>
    </div>
  );
}
