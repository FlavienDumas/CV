import { useNavigate } from "react-router-dom";

function Navigation() {
    const navigate = useNavigate();

    const goTo = (path)=>{
        navigate(path);
    }

    return (
        <div className="navigation">
            <div className="name center"><h1>Flavien Dumas</h1></div>
            <div className="menu">
                <button className="button blueButton" onClick={()=>goTo('/')}>À mon sujet</button>
                <button className="button blueButton" onClick={()=>goTo('/school')}>Apprentissage</button>
                <button className="button blueButton" onClick={()=>goTo('/projects')}>Projets</button>
                <button className="button blueButton" onClick={()=>goTo('/skills')}>Compétences</button>
                <button className="button blueButton" onClick={()=>goTo('/spare-time')}>Loisirs</button>
            </div>
        </div>
    )
  }
  
  export default Navigation;





