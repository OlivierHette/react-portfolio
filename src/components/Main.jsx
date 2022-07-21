import pdpImg from '../images/profile-image.webp'

const aboutText = "Développeur full stack, je me suis formé en autodidacte depuis mes 11 ans. J’ai décidé de formaliser mes connaissances et mon experience par un diplome de développeur Full Stack."

function Main() {
  
  return(
    <main>
      <section className="section hero">
        <div className="hero__intro">
          <span>Bonjour, je suis</span>
          <h1>Olivier Hette</h1>
          <h2>Développeur Full Stack</h2>
        </div>
        <div className="hero__btn">
          <div className="btn btn--border-only">
            <span>Télecharger CV</span>
          </div>
          <div className="btn btn--bg">
            <span>À propos</span>
          </div>
        </div>
        <img className="image image--rounded" src={pdpImg} alt="visage olivier hette" />
      </section>

      <section className="section about">
        <div className="section__title">
          <span className='text-xs'>Introduction</span>
          <h3>À propos</h3>
        </div>

        <img className="image image--radius" src={pdpImg} alt="visage olivier hette" />

        <div className="about__container">
          <div className="about__item">
            <i class='bx bx-code-curly bx-sm' ></i>
            <div className="about__item-text">
              <h4>Experiences</h4>
              <span className='text-xs'>+ 1 an</span>
            </div>
          </div>

          <div className="about__item">
          <i className='bx bx-briefcase-alt bx-sm' ></i>
            <div className="about__item-text">
              <h4>Missions</h4>
              <span className='text-xs'>+ 10 projets</span>
            </div>
          </div>

          <div className="about__item">
            <i class='bx bxs-graduation bx-sm'></i>
            <div className="about__item-text">
              <h4>Formation</h4>
              <span className='text-xs'>Bac +2</span>
            </div>
          </div>
        </div>

        <p className='about__content-text'>{aboutText}</p>
      </section>

      <section className="section experiences">
        <div className="section__title">
          <span className='text-xs'>mes compétences</span>
          <h3>Mon experiences</h3>
        </div>

        <div className="experiences__container">
          <div className="experiences__card">
            <h3>FrontEnd</h3>

            <div className="experiences__ability">
              <i class='bx bxs-badge-check bx-sm'></i>
              <div className="experiences__ability-text">
                <h4>HTML5</h4>
                <span></span>
              </div>
            </div>

          </div>
           
          <div className="experiences__card">
            <h3>BackEnd</h3>
            <div className="experiences__ability">
            <i class='bx bxs-badge-check bx-sm'></i>
              <div className="experiences__ability-text">
                <h4>NodeJs</h4>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="section__title">
          <span className='text-xs'>Introduction</span>
          <h3>À propos</h3>
        </div>

      </section>

      <section className="contact">
        <div className="section__title">
          <span className='text-xs'>Introduction</span>
          <h3>À propos</h3>
        </div>
      </section>
    </main>
  )
}

export default Main;