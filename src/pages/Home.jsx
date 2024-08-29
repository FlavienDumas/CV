import { useEffect, useState } from "react";
import CardContent from "../components/CardContent";
import { SiMicrosofttranslator } from "react-icons/si";
import { FaLightbulb } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegThumbsDown } from "react-icons/fa";
import { VscSmiley } from "react-icons/vsc";

function Home() {
  const [textWCS, setTextWCS] = useState();
  const [textTerana, setTextTerana] = useState();
  const [textLangage, setTextLangage] = useState();
  const [sizeUpAnimation, setSizeUpAnimation] = useState();

  const sizeGrow = ()=>{
    setSizeUpAnimation({
      animation: "tilt 2s linear infinite",
      height: "70px",
      width: "70px"
    })
  }

  useEffect(()=>{
    setTextWCS(<><b>09.2023-&gt;09.2024</b> :
    Formation en alternance "Concepteur/Développeur d'application" spécialisée en React/NodeJS</>);
    setTextTerana(<><b>09.2023-&gt;09.2024</b> :
    Alternance "Développeur logiciel métier" avec un projet déployé et fonctionnel</>);
    setTextLangage(<>Maitrise Anglais C1, <br/> Maitrise Japonais N4 (JPLT)</>);
  }, [])

  return (
    <div className="divHome">
      <div className="center divTitle">
        <h1>Titulaire d'un master Logistique/Stockastique, puis... <br/>
        Reconvertis à la <a className="wcsLink" href="https://www.wildcodeschool.com">Wild Code School!</a></h1>
        <img className="pdp" src="../src/assets/pdp.jpg" alt="PDP" />
      </div>
      <div className="center contentHome">
        <div className="center smallCardsDiv">
          <CardContent 
          title={"Wild Code School"}
          content={textWCS}
          logo={<img src="../src/assets/wcs.png" alt="WCS" />}
          />
          <CardContent 
          title={"Terana"}
          content={textTerana}
          logo={<img src="../src/assets/terana.png" alt="Terana" />}
          />
          <CardContent 
          title={"Langues"}
          content={textLangage}
          logo={<SiMicrosofttranslator className="icon"/>}
          />
        </div>
        <div className="center divSubTitle">
          <h2>Talents <FaLightbulb className="icon" color="yellow"/></h2>
        </div>
        <div className="center wideCard">
          <div className="center yellow">
            <h3>Expérience utilisateur :</h3>
            <p>Quand on a fait des études dans plusieurs secteurs du tertiaire, facile de comprendre 
              les besoins métier des utilisateurs !</p>
            <FaRegUser className="icon"/>
          </div>
          <div className="center yellow">
            <h3>L'adaptabilité :</h3>
            <p>Nécessaire pour participer à des projets différents et pour rapidement
              être utile au sein d'une équipe !</p>
            <FaExchangeAlt className="icon"/>
          </div>
          <div className="center yellow">
            <h3>La curiosité :</h3>
            <p>Toujours à l'affut des prochains outils qui faciliteront la création, 
              l'évolution et la maintenance des logiciels !</p>
            <FaMagnifyingGlass className="icon"/>
          </div>
        </div>
        <div className="center divSubTitle">
          <h2>Défauts <FaRegThumbsDown className="icon" color="red"/></h2>
        </div>
        <div className="center wideCard">
          <div className="center red" onMouseEnter={sizeGrow} onMouseLeave={()=>setSizeUpAnimation(null)}>
            <h3>Aucun</h3>
            <p>Non vraiment, aucun.</p>
            <VscSmiley className="icon" style={sizeUpAnimation}/>
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default Home;