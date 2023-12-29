import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { TbBrandNodejs } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { SiApollographql } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { MdTabletMac } from "react-icons/md";

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
              <SiMysql className="icon"/>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
export default Projets;