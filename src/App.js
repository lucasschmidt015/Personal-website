import React from "react";
import Photo from './Resources/Eu.png'
import Primeflix from './Resources/Primeflix.png'
import SistenChamados from './Resources/SistenChamados.png'
import { AiFillHtml5, AiOutlineMobile } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { SiCplusplus } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { ImWhatsapp, ImLinkedin2 } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi'



export default function App(){
  return(
    <div className="container">
        <div className="cabecalho">
            <img src={Photo}/>
            <div className="header-info">
              <p>Olá! me chamo</p>
              <h1>Lucas Torchelsen Schmidt</h1>
              <h2>Desenvolvedor de software</h2>
            </div>
        </div>
        <div className="my-info">
          <div className="info-left">
              <div className="info">
                <h1>Sobre mim</h1>
                <p>Sou um desenvolvedor de software apaixonado e dedicado, com mais de um ano de experiência na área. Meus objetivos profissionais são continuar me desenvolvendo e tornar-me um excelente profissional na minha área de atuação, buscando sempre oferecer soluções inovadoras e eficientes.</p>
              </div>
          </div>      
          <div className="info-Right">
              <div className="info">
                <h1>Habilidades</h1>
                <div className="multi-info">
                  <div className="linha">
                    <p>
                      {<AiFillHtml5 size={10}/>}
                      - HTML
                    </p>
                    <p>
                      {<DiCss3 size={10}/>}
                      - CSS
                    </p>
                    <p>
                      {<IoLogoJavascript size={10}/>}
                      - Javascript
                    </p>
                  </div>  
                  <div className="linha">
                    <p>
                      {<FaReact size={10}/>}
                      - React
                    </p>
                    <p>
                      {<SiCplusplus size={10}/>}
                      - C++
                    </p>
                    <p>
                      {<AiOutlineMobile size={10}/>}
                      - QT
                    </p>
                  </div>                 
                </div>
              </div>
          </div>      
        </div>
        <div className="my-info">
          <div className="info-left">
                <div className="info">
                  <h1>Formação academica</h1>
                  <p id="ativo">2020/2 - O MOMENTO</p>
                  <h2>Bacharelado em Ciências da Computação</h2>
                  <span>Universidade federal da fronteira sul</span>
                </div>
          </div>
          <div className="info-Right">
              <div className="info">
                  <h1>Experiência profissional</h1>
                  <p id="ativo">2022/2 - O MOMENTO</p>
                  <h2>Programador Jr - QT</h2>
                  <span>Gamatec</span>
              </div>
          </div>
        </div>

        <div className="my-projects">
          <div className="projects-title">
            <h1>Portifólio</h1>
            <span>Alguns dos projetos desenvolvidos por mim</span>
          </div>          
          <div className="projects">
            <div className="project">
              <img src={Primeflix}></img>
              <h1>Project-Films</h1>
              <button onClick={() => window.open('https://primeflixf.netlify.app/', '_blank')}>Ver</button>
            </div>
            <div className="project">
              <img src={SistenChamados}></img>
              <h1>Sistema de Chamados</h1>
              <button onClick={() => window.open('https://sistemdechamados.netlify.app/deshboard', '_blank')}>Ver</button>
            </div>
          </div>
        </div>

        <div className="my-contacts">
            <h1>Contato</h1>
            <span>Você pode entrar em contato comigo pelos seguintes meios</span>
            <div className="contact">
              <ImWhatsapp/>
              <div>
                <h2>WhatsApp</h2>
                <p>(53) 981349571</p>
              </div>
              <HiOutlineMail/>
              <div>
                <h2>Email</h2>
                <p>lucas.schmidt015@gmail.com</p>
              </div>
              <ImLinkedin2/>
              <div>
                <h2>Linkedin</h2>
                <p>Lucas Schmidt</p>
              </div>
            </div>
        </div>
    </div>
  );
}