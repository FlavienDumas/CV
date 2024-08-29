import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { TbBrandNodejs } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { SiApollographql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
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

function Projets() {

    return (
      <div className="center divProjets">
        <div className="divProjet">
          <div className="center imgDiv">
            <img src="../src/assets/terana.png" alt="Terana" />
          </div>
          <div className="contentDiv">
            <h3>Application de gestion de colis interne</h3>
            <p>Une application Web dont l'objectif est de faciliter le partage et l'accès aux informations
              concernant les colis qui transitent chaque jour entre les 9 laboratoires de l'entreprise.</p>
            <div className="center iconsDiv">
              <FaUserAlt className="icon" color="rgb(18,161,154)"/>
              <GiCardboardBoxClosed className="icon" color="rgb(18,161,154)"/>
              <FaArrowRightArrowLeft className="icon shake" color="rgb(204,18,53)"/>
              <GiCardboardBoxClosed className="icon" color="rgb(201,158,103)"/>
              <FaUserAlt className="icon" color="rgb(201,158,103)"/>
            </div>
            <p>Permettant de créer et consulter les colis de chacun des 450 utilisateurs, <br/> 
              C'est aussi l'outil de travail du personnel sur le terrain, en charge des livraisons.</p>
            <div className="center iconsDiv">
              <FaUserAlt className="icon" color="rgb(200,200,200)"/>
              <FaTruck className="icon" color="rgb(200,200,200)"/>
              <MdTabletMac className="icon" color="rgb(200,200,200)"/>
            </div>
          </div>
          <div className="center technologiesProjet">
            <div className="center">
              <p>Frontend : </p>
              <DiHtml5 className="icon"/>
              <DiCss3 className="icon"/>
              <DiReact className="icon"/>
            </div>
            <div className="center">
              <p>Backend : </p>
              <TbBrandNodejs className="icon nodeJS"/>
              <GrGraphQl className="icon graphQL"/>
              <SiApollographql className="icon"/>
            </div>
            <div className="center">
              <p>Base de données : </p>
              <BiLogoPostgresql className="icon"/>
            </div>
          </div>
        </div>
        
        <div className="divProjet">
          <div className="center imgDiv">
            <img src="../src/assets/python.png" alt="Terana" style={{
              height: '15rem',
              width: '15rem'
            }}/>
          </div>
          <div className="contentDiv">
            <h3>Jeu de carte</h3>
            <p>Une application desktop ou deux joueurs s'affrontent avec leurs deck respectif.
              Un simple jeu de cartes développé dans une optique d'apprentissage qui m'a fait découvrir la POO
               (Programmation Orientée Objet).
            </p>
            <div className="center iconsDiv" style={{
              marginBottom: 0,
            }}>
              <GiCardAceDiamonds className="icon" color="rgb(52,122,178)"/>
              <RiSwordLine className="icon smalltilt" color="white"/>
              <GiCardKingSpades className="icon" color="rgb(255,205,56)"/>
            </div>
            <div className="center iconsDiv" style={{
              marginTop: 0
            }}>
              <GiCardJackClubs className="icon" color="rgb(52,122,178)"/>
              <RiSwordLine className="icon smalltilt" color="white"/>
              <GiCardQueenHearts className="icon" color="rgb(255,205,56)"/>
            </div>
          </div>
          <div className="center technologiesProjet">
            <div className="center">
              <p>Frontend : </p>
              <FaPython className="icon"/>
            </div>
            <div className="center">
              <p>Backend : </p>
              <FaPython className="icon"/>
            </div>
            <div className="center">
              <p>Base de données : </p>
              <BiSolidFileJson className="icon"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
export default Projets;