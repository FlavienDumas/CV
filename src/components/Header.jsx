
function Header() {

    return (
        <div className="header center">
            <div className="center">
                <img src="/src/assets/mail.png" alt="logo mail" />
                <a href="mailto:Flavien.dumas63@gmail.com">Flavien.dumas63@gmail.com</a>
            </div>
            <div className="center">
                <img src="/src/assets/tel.png" alt="logo tel" />
                <p>06 61 77 61 72</p>
            </div>
            <div className="center">
                <img src="/src/assets/gitHub.png" alt="logo gitHub" />
                <a href="https://github.com/FlavinouTheOne" target="_blank">GitHub</a>
            </div>
            <div className="center">
                <img src="/src/assets/linkedin.png" alt="logo linkedin" />
                <a href="https://www.linkedin.com/in/flavien-dumas-b90261245" target="_blank">Linkedin</a>
            </div>
        </div>
    )
  }
  
  export default Header;