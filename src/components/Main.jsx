import pdpImg from '../images/profile-image.webp'

function Main() {
  
  return(
    <main>
      <div className="section hero">
        <div className="hero__intro">
          <span>Bonjour, je suis</span>
          <h1>Olivier Hette</h1>
          <h2>Développeur Full Stack</h2>
        </div>
        <div className="hero_btn">
          <div className="btn btn--border-only">
            <span>Télecharger CV</span>
          </div>
          <div className="btn btn--radius">
            <span>À propos</span>
          </div>
        </div>
        <img src={pdpImg} alt="visage olivier hette" />
      </div>

      <div className="section about">

      </div>

      <div className="section experiences">

      </div>

      <div className="section projects">

      </div>

      <div className="section contact">

      </div>
    </main>
  )
}

export default Main;