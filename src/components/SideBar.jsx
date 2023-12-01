import CardSelf from "./CardSelf";

function SideBar() {

    return (
        <div className="divSideBar">
            <CardSelf/>
            <div className="divInfo">
                <div className="center">
                    <div>Ville:</div>
                    <div>Clermont-Ferrand</div>
                </div>
                <div className="center">
                    <div>Age:</div>
                    <div>23</div>
                </div>
            </div>
            <div className="divLangages">

            </div>
            <div className="divSkills">

            </div>
            <div className="divTechno">

            </div>
        </div>
    )
  }
  
export default SideBar;