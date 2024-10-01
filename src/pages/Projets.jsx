import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { TbBrandNodejs } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { FaAngular } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiApollographql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GiCardboardBox } from "react-icons/gi";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { MdTabletMac } from "react-icons/md";
import { GiCardJackClubs } from "react-icons/gi";
import { GiCardAceDiamonds } from "react-icons/gi";
import { GiCardQueenHearts } from "react-icons/gi";
import { GiCardKingSpades } from "react-icons/gi";
import { RiSwordLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { BiSolidFileJson } from "react-icons/bi";
import { FaFilePdf } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa6";
import { MdWarehouse } from "react-icons/md";

function Projets() {

    return (
      <div className="center divProjets">
        <div className="divProjet">
          <div className="center imgDiv">
            <img src="/CV/terana.png" alt="Terana" />
          </div>
          <div className="contentDiv">
            <h3>Teralogix : Application de gestion de colis interne</h3>
            <p>Une application web dont l'objectif est de faciliter le partage et l'accès aux informations
              concernant les colis qui transitent chaque jour entre les 9 laboratoires de l'entreprise.</p>
            <div className="center iconsDiv">
              <FaUserAlt className="icon" color="rgb(18,161,154)"/>
              <GiCardboardBoxClosed className="icon" color="rgb(18,161,154)"/>
              <FaArrowRightArrowLeft className="icon shake" color="rgb(204,18,53)"/>
              <GiCardboardBoxClosed className="icon" color="rgb(201,158,103)"/>
              <FaUserAlt className="icon" color="rgb(201,158,103)"/>
            </div>
            <p>Permettant de créer et consulter les colis de chacun des 450 utilisateurs, <br/> 
              c'est aussi l'outil de travail du personnel sur le terrain, en charge des livraisons.</p>
            <div className="center iconsDiv">
              <FaUserAlt className="icon" color="rgb(200,200,200)"/>
              <FaTruck className="icon" color="rgb(200,200,200)"/>
              <MdTabletMac className="icon" color="rgb(200,200,200)"/>
            </div>
          </div>
          <div className="center technologiesProjet">
            <div className="center">
              <p>Frontend : </p>
              <DiReact className="icon react"/>
              <DiHtml5 className="icon html"/>
              <DiCss3 className="icon css"/>
            </div>
            <div className="center">
              <p>Backend : </p>
              <TbBrandNodejs className="icon nodeJS"/>
              <GrGraphQl className="icon graphQL"/>
              <SiApollographql className="icon apollo"/>
            </div>
            <div className="center">
              <p>Base de données : </p>
              <BiLogoPostgresql className="icon postgresql"/>
            </div>
          </div>
        </div>

        <div className="divProjet">
          <div className="center imgDiv">
            <img src="/CV/filehublogo.png" alt="Python" style={{
              height: '15rem',
              width: '15rem'
            }}/>
          </div>
          <div className="contentDiv">
            <h3>FileHub : Logiciel de transfert de fichiers</h3>
            <p>Une application web permettant l'upload et le download de fichiers depuis un server.
              Un logiciel inspiré de WeTransfer créé avec 4 autres développeurs dans le cadre de mon alternance 
              à la Wild Code School.
            </p>
            <div className="center iconsDiv" style={{
              marginBottom: 0,
            }}>
              <FaUserAlt className="icon" color="rgb(250,201,41)"/>
              <FaFilePdf className="icon transfert" color="rgb(200,200,200)" style={{
                height: '75%'
              }}/>
              <div style={{
                width: '10%'
              }}/>
              <FaServer className="icon" color="rgb(255,84,79)"/>
            </div>
            <div className="center iconsDiv" style={{
              marginTop: 0
            }}>
              <FaUserAlt className="icon" color="rgb(250,201,41)"/>
              <div style={{
                width: '10%'
              }}/>
              <FaFileImage className="icon transfertReverse" color="rgb(200,200,200)" style={{
                height: '75%',
              }}/>
              <FaServer className="icon" color="rgb(255,84,79)"/>
            </div>
          </div>
          <div className="center technologiesProjet">
            <div className="center">
              <p>Frontend : </p>
              <DiReact className="icon react"/>
              <DiHtml5 className="icon html"/>
              <DiCss3 className="icon css"/>
            </div>
            <div className="center">
              <p>Backend : </p>
              <TbBrandNodejs className="icon nodeJS"/>
              <GrGraphQl className="icon graphQL"/>
              <SiApollographql className="icon apollo"/>
            </div>
            <div className="center">
              <p>Base de données : </p>
              <BiLogoPostgresql className="icon postgresql"/>
            </div>
          </div>
        </div>

        <div className="divProjet">
          <div className="center imgDiv">
            <img src="/CV/stockLogo.png" alt="Python" style={{
              height: '15rem',
              width: '15rem'
            }}/>
          </div>
          <div className="contentDiv">
            <h3>Logiciel de gestion de stock</h3>
            <p>Une application web de gestion de stock et de commandes dont les fonctionnalités sont
              inspirées par mes expériences professionnelles dans le secteur de la logistique. Un
              frontend Angular en relation avec une API REST Java Bootstrap.
            </p>
            <div className="center iconsDiv" style={{
              marginBottom: 0,
            }}>
              <FaUserAlt className="icon transfert" color="rgb(200,200,200)"/>
              <GiCardboardBoxClosed className="icon transfert" color="rgb(218,172,130)"/>
              <div style={{
                width: '10%'
              }}/>
              <MdWarehouse className="icon" color="rgb(109,179,63)"/>
            </div>
            <div className="center iconsDiv" style={{
              marginTop: 0,
            }}>
              <div style={{
                width: '10%'
              }}/>
              <GiCardboardBox className="icon transfertReverse" color="rgb(218,172,130)"/>
              <FaUserAlt className="icon transfertReverse" color="rgb(200,200,200)"/>
              <MdWarehouse className="icon" color="rgb(109,179,63)"/>
            </div>
          </div>
          
          <div className="center technologiesProjet">
            <div className="center">
              <p>Frontend : </p>
              <FaAngular className="icon angular"/>
              <DiHtml5 className="icon html"/>
              <DiCss3 className="icon css"/>
            </div>
            <div className="center">
              <p>Backend : </p>
              <FaJava className="icon java"/>
              <SiSpringboot className="icon springboot"/>
            </div>
            <div className="center">
              <p>Base de données : </p>
              <BiLogoPostgresql className="icon postgresql"/>
            </div>
          </div>
        </div>
        
        <div className="divProjet">
          <div className="center imgDiv">
            <img src="/CV/python.png" alt="Python" style={{
              height: '15rem',
              width: '15rem'
            }}/>
          </div>
          <div className="contentDiv">
            <h3>Jeu de carte</h3>
            <p>Une application desktop où deux joueurs s'affrontent avec leurs decks respectifs.
              Un simple jeu de cartes développé en python dans une optique d'apprentissage autodidacte qui m'a fait 
              découvrir la POO (Programmation Orientée Objet).
            </p>
            <div className="center iconsDiv" style={{
              marginBottom: 0,
            }}>
              <GiCardAceDiamonds className="icon" color="rgb(52,122,178)"/>
              <RiSwordLine className="icon smalltilt" color="rgb(200,200,200)"/>
              <GiCardKingSpades className="icon" color="rgb(255,205,56)"/>
            </div>
            <div className="center iconsDiv" style={{
              marginTop: 0
            }}>
              <GiCardJackClubs className="icon" color="rgb(52,122,178)"/>
              <RiSwordLine className="icon smalltilt" color="rgb(200,200,200)"/>
              <GiCardQueenHearts className="icon" color="rgb(255,205,56)"/>
            </div>
          </div>
          <div className="center technologiesProjet">
            <div className="center">
              <p>Frontend : </p>
              <FaPython className="icon python"/>
            </div>
            <div className="center">
              <p>Backend : </p>
              <FaPython className="icon python"/>
            </div>
            <div className="center">
              <p>Base de données : </p>
              <BiSolidFileJson className="icon json"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
export default Projets;