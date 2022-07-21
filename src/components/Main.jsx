import pdpImg from '../images/profile-image.webp'

const aboutText = "Développeur full stack, je me suis formé en autodidacte depuis mes 11 ans. J’ai décidé de formaliser mes connaissances et mon experience par un diplome de développeur Full Stack."
const abilityFront = [
  { id: 1, name: 'HTML5', level: 'Avancé' },
  { id: 2, name: 'ReactJs', level: 'Intermediaire' },
  { id: 3, name: 'CSS3', level: 'Avancé' },
  { id: 4, name: 'VueJs', level: 'Base' },
  { id: 5, name: 'Sass', level: 'Avancé' },
  { id: 6, name: 'Bootstrap', level: 'Intermediaire' },
  { id: 7, name: 'JavaScript', level: 'Intermediaire' },
  { id: 8, name: 'TailwindCSS', level: 'Intermediaire' }
]
const abilityBack = [
  { id: 1, name: 'NodeJs', level: 'Intermediaire' },
  { id: 2, name: 'SQL', level: 'Intermediaire' },
  { id: 3, name: 'Express', level: 'Intermediaire' },
  { id: 4, name: 'NoSQL', level: 'Intermediaire' },
  { id: 5, name: 'PHP', level: 'Base' },
  { id: 6, name: 'GitHub', level: 'Intermediaire' },
  { id: 7, name: 'Java', level: 'Base' }
]

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
            <i className='bx bx-code-curly bx-sm' ></i>
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
            <i className='bx bxs-graduation bx-sm'></i>
            <div className="about__item-text">
              <h4>Formation</h4>
              <span className='text-xs'>Bac +2</span>
            </div>
          </div>
        </div>

        <p className='about__content-text' key={aboutText}>{aboutText}</p>
      </section>

      <section className="section experiences">
        <div className="section__title">
          <span className='text-xs'>mes compétences</span>
          <h3>Mon experiences</h3>
        </div>

        <div className="experiences__container">
          <div className="experiences__card">
            <h3>FrontEnd</h3>
              <div className="experiences__container__ability">

                { abilityFront.map(ability => {
                    return (
                        <div className="experiences__ability">
                          <i className='bx bxs-badge-check bx-sm'></i>
                          <div className="experiences__ability-text">
                            <h4 key={ability.id}>{ability.name}</h4>
                            <span className='text-xs'>{ability.level}</span>
                          </div>
                        </div>
                    )
                  })
                }
              </div>

          </div>
           
          <div className="experiences__card">
            <h3>BackEnd</h3>
              <div className="experiences__container__ability">
                { abilityBack.map(ability => {
                    return (
                        <div className="experiences__ability">
                          <i className='bx bxs-badge-check bx-sm'></i>
                          <div className="experiences__ability-text">
                            <h4 key={ability.id}>{ability.name}</h4>
                            <span className='text-xs'>{ability.level}</span>
                          </div>
                        </div>
                    )
                  })
                }
              </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="section__title">
          <span className='text-xs'>Mon Portfolio</span>
          <h3>Projets récent</h3>
        </div>

      </section>

      <section className="contact">
        <div className="section__title">
          <span className='text-xs'>Entrez en contact</span>
          <h3>Contactez-moi</h3>
        </div>
      </section>
    </main>
  )
}

export default Main;