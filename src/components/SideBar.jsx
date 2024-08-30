import { useState } from "react";

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
    const [phoneHover, setPhoneHover] = useState(false);
    const [mailHover, setMailHover] = useState(false);
    const [copiedText, setCopiedtext] = useState('');

    const handlePhoneHover = ()=>{
        setPhoneHover(!phoneHover)
        setCopiedtext('');
    }

    const handleMailHover = ()=>{
        setMailHover(!mailHover)
        setCopiedtext('');
    }

    const handleCopy = (text)=>{
        navigator.clipboard.writeText(text);
        setCopiedtext(text);
    }

    return (
        <div className="divSideBar">
            <div className="divHead center">
                <img src="../src/assets/pdpJapon.jpeg" alt="PDP" />
                <h4>Flavien Dumas</h4>
                <div className="center">Concepteur / Développeur Fullstack <br/> Junior</div>
            </div>

            <div className="sideGeneralDiv">
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
                    <h4>Frontend</h4>
                    <div className="center">
                        <div>React</div>
                        <div className="center">
                            <DiReact className="icon react"/>
                        </div>
                    </div>
                    <div className="center">
                        <div>Html/Css/TS</div>
                        <div className="center">
                            <DiHtml5 className="icon html"/>
                            <DiCss3 className="icon css"/>
                            <BiLogoTypescript className="icon typeScript"/>
                        </div>
                    </div>
                </div>
                <div className="divInfo">
                    <h4>Backend</h4>
                    <div className="center">
                        <div>NodeJs/Php</div>
                        <div className="center">
                            <TbBrandNodejs className="icon nodeJS"/>
                            <SiPhp className="icon php"/>
                        </div>
                    </div>
                    <div className="center">
                        <div>GraphQL/REST</div>
                        <div className="center">
                            <GrGraphQl className="icon graphQL"/>
                            <TbApi className="icon api"/>
                        </div>
                    </div>
                </div>
                <div className="divInfo">
                    <h4>DevOps</h4>
                    <div className="center">
                        <div>Git/Docker</div>
                        <div className="center">
                            <DiGit className="icon git"/>
                            <FaDocker className="icon docker"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="center divContact">
                <a href="https://github.com/FlavinouTheOne" target="_blank">
                    <DiGithubBadge className="icon gitHub"/>
                </a>
                <a href="https://www.linkedin.com/in/flavien-dumas-b90261245/" target="_blank">
                    <IoLogoLinkedin className="icon linkedin"/>
                </a>
                <div className="iconContainer" onClick={()=>{handleCopy('06.61.77.61.72')}}
                onMouseEnter={handlePhoneHover}
                onMouseLeave={handlePhoneHover}>
                    {phoneHover === true ?
                    <div className="popdiv">
                        {copiedText === '06.61.77.61.72' ? 'Copié!' : '06.61.77.61.72'}
                    </div>: null}
                    <MdPhoneEnabled className="icon phone"/>
                </div>
                <div className="iconContainer" onClick={()=>{handleCopy('Flavien.dumas63@gmail.com')}}
                onMouseEnter={handleMailHover}
                onMouseLeave={handleMailHover}>
                    {mailHover === true ?
                    <div className="popdiv">
                        {copiedText === 'Flavien.dumas63@gmail.com' ? 'Copié!' : 'Flavien.dumas63@gmail.com'}
                    </div>: null}
                    <IoMdMail className="icon mail"/>
                </div>
            </div>
        </div>
    )
  }
  
export default SideBar;