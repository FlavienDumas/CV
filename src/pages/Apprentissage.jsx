
function Apprentissage() {

    return (
      <div className="mainContent center apprentissage">
        <h2>Apprentissage...</h2>
        <div className="center apprentissageDiv">
            <div>
                <h3><a href="https://www.wildcodeschool.com/fr-fr/" target="_blank">La Wild Code School!</a></h3>
                <p>C'est dans la formation en alternance "concepteur/développeur web", spécialisée dans les
                    technologies "typescript" et "React", que l'on m'a enseigné le développement web.</p>
                <p>Cette formation prépare au titre professionnel "Concepteur développeur d'applications"
                    délivré par le ministère du travail, niveau 6 (équivalent bac+3/4)</p>
            </div>
            <div>
                <img src="/src/assets/WCS.webp" alt="logo WCS" />
            </div>
        </div>
        <div className="center apprentissageDiv">
            <div>
                <img src="/src/assets/terana.png" alt="logo Terana" />
            </div>
            <div>
                <h3><a href="https://www.labo-terana.fr/" target="_blank">Groupe Terana</a></h3>
                <p>J'ai donc effectué une alternance d'un an au sein du groupe de laboratoires Terana 
                    en tant que développeur de solution informatique pour les processus métier.</p>
                <p>Durant cette dernière, j'ai pu mener de nombreux projets... tous disponibles
                    dans la page "Projets"!</p>
            </div>
            
        </div>
      </div>
    )
  }
  
  export default Apprentissage;