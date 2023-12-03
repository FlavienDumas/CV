import { useEffect, useState } from "react";
import CardContent from "../components/CardContent";

function Home() {
  const [textWCS, setTextWCS] = useState();
  const [textTerana, setTextTerana] = useState();

  useEffect(()=>{
    setTextWCS(<><b>09.2023-&gt;09.2024</b> :
    Formation en alternance "Concepteur/Développeur d'application" spécialisée en React/NodeJS</>);
    setTextTerana(<><b>09.2023-&gt;09.2024</b> :
    Contrat d'alternance "Développeur logiciel métier" avec de nombreux projets...</>);
  }, [])

    return (
      <div className="divHome">
        <div className="center divTitle">
          <h1>Titulaire d'un master Logistique/Stockastique, puis... <br/>
          Reconvertis à la <a className="wcsLink" href="">Wild Code School!</a></h1>
          <img className="pdp" src="../src/assets/pdp.jpg" alt="PDP" />
        </div>
        <div className="center contentHome">
          <CardContent 
          title={"Wild Code School"}
          content={textWCS}
          logo={<img src="../src/assets/wcs.png" alt="WCS" />}
          />
          <CardContent 
          title={"Terana"}
          content={textTerana}
          logo={<img src="../src/assets/terana.png" alt="WCS" />}
          />
        </div>
      </div>
    )
  }
  
export default Home;