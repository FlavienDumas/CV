import { useState } from "react";

import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { DiReact } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { TbApi } from "react-icons/tb";
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";
import { MdPhoneEnabled } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { SiJira } from "react-icons/si";

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
                <img src="/CV/pdpJapon.jpeg" alt="PDP" />
                <h4>Flavien Dumas</h4>
                <div className="center">Concepteur / Développeur Fullstack</div>
            </div>

            <div className="sideGeneralDiv">
                <div className="divInfo">
                    <h4>Frontend</h4>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        margin: 0
                    }}>
                        <div className="center" style={{
                            flexDirection: 'column'
                        }}>
                            <DiReact className="icon react"/>
                            <span>React</span>
                        </div>
                        <div className="center" style={{
                            flexDirection: 'column'
                        }}>
                            <FaAngular className="icon angular"/>
                            <span>Angular</span>
                        </div>
                        <div className="center" style={{
                            flexDirection: 'column'
                        }}>
                            <div style={{
                                margin: 0
                            }}>
                                <DiHtml5 className="icon html"/>
                                <DiCss3 className="icon css"/>
                            </div>
                            <span>Html/Css</span>
                        </div>
                        <div className="center" style={{
                            flexDirection: 'column'
                        }}>
                            <BiLogoTypescript className="icon typeScript"/>
                            <span>Typescript</span>
                        </div>
                    </div>
                </div>
                <div className="divInfo">
                    <h4>Backend</h4>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        margin: 0
                    }}>
                        <div className="center" style={{
                            flexDirection: 'column'
                        }}>
                            <TbBrandNodejs className="icon nodeJS"/>
                            <span>NodeJs</span>
                        </div>
                        <div className="center" style={{
                            flexDirection: 'column'
                        }}>
                            <FaJava className="icon java"/>
                            <span>Java</span>
                        </div>
                        <div className="center" style={{
                            flexDirection: 'column'
                        }}>
                            <GrGraphQl className="icon graphQL"/>
                            <span>GraphQL</span>
                        </div>
                        <div className="center" style={{
                            flexDirection: 'column'
                        }}>
                            <TbApi className="icon api"/>
                            <span>REST</span>
                        </div>
                    </div>
                </div>
                <div className="divInfo">
                    <h4>DevOps</h4>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        margin: 0
                    }}>
                        <div className="center" style={{
                            flexDirection: 'column'
                        }}>
                            <DiGit className="icon git"/>
                            <span>Git</span>
                        </div>
                        <div className="center" style={{
                            flexDirection: 'column'
                        }}>
                            <FaDocker className="icon docker"/>
                            <span>Docker</span>
                        </div>
                        <div className="center" style={{
                            flexDirection: 'column'
                        }}>
                            <SiJira className="icon jira"/>
                            <span>Jira</span>
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