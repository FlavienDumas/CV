import CardSelf from "./CardSelf";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { DiReact } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { SiPhp } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { TbApi } from "react-icons/tb";
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";
import { MdPhoneEnabled } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

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
            <div className="divInfo">
                <h2>Frontend</h2>
                <div className="center">
                    <div>React</div>
                    <div className="center">
                        <DiReact className="icon"/>
                    </div>
                </div>
                <div className="center">
                    <div>Html/Css/TS</div>
                    <div className="center">
                        <DiHtml5 className="icon"/>
                        <DiCss3 className="icon"/>
                        <BiLogoTypescript className="icon"/>
                    </div>
                </div>
            </div>
            <div className="divInfo">
                <h2>Backend</h2>
                <div className="center">
                    <div>NodeJs/Php</div>
                    <div className="center">
                        <TbBrandNodejs className="icon"/>
                        <SiPhp className="icon"/>
                    </div>
                </div>
                <div className="center">
                    <div>GraphQL/REST</div>
                    <div className="center">
                        <GrGraphQl className="icon"/>
                        <TbApi className="icon"/>
                    </div>
                </div>
            </div>
            <div className="divInfo">
                <h2>DevOps</h2>
                <div className="center">
                    <div>Git/Docker</div>
                    <div className="center">
                        <DiGit className="icon"/>
                        <FaDocker className="icon"/>
                    </div>
                </div>
            </div>
            <div className="center divContact">
                <a href=""><DiGithubBadge className="icon"/></a>
                <a href=""><IoLogoLinkedin className="icon"/></a>
                <MdPhoneEnabled className="icon"/>
                <button><IoMdMail className="icon"/></button>
            </div>
        </div>
    )
  }
  
export default SideBar;