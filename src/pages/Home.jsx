

function Home() {

    return (
      <div className="mainContent center home">
        <h2>À mon sujet...</h2>
        <div className="center homeDiv">
          <div>
            <h3>Concepteur/développeur d'applications junior de 23 ans...</h3>
          </div>
          <div>
            <img src="/src/assets/pdp.jpg" alt="image" />
          </div>
        </div>
        <div className="center homeDiv">
          <div>
            <img src="/src/assets/dev.jpg" alt="image" />
          </div>
          <div>
            <h3>...Passionné de développement informatique</h3>
          </div>
        </div>
        <div className="center homeDiv">
          <div>
            <h3>Frontend + Backend = ...Full Stack!</h3>
          </div>
          <div>
            <img src="/src/assets/fullStack.png" alt="image" />
          </div>
        </div>
        <div className="center homeDiv">
          <div>
            <img src="/src/assets/devGraph.jpeg" alt="image" />
          </div>
          <div>
            <h3>...Et ayant de larges connaissances en gestion de projet et amélioration continue!</h3>
          </div>
        </div>
      </div>
    )
  }
  
  export default Home;