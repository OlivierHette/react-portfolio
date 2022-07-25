/* eslint-disable require-jsdoc */
import React from 'react';

const abilityFront = [
  {id: 1, name: 'HTML5', level: 'Avancé'},
  {id: 2, name: 'ReactJs', level: 'Intermediaire'},
  {id: 3, name: 'CSS3', level: 'Avancé'},
  {id: 4, name: 'VueJs', level: 'Base'},
  {id: 5, name: 'Sass', level: 'Avancé'},
  {id: 6, name: 'Bootstrap', level: 'Intermediaire'},
  {id: 7, name: 'JavaScript', level: 'Intermediaire'},
  {id: 8, name: 'TailwindCSS', level: 'Intermediaire'},
];
const abilityBack = [
  {id: 1, name: 'NodeJs', level: 'Intermediaire'},
  {id: 2, name: 'SQL', level: 'Intermediaire'},
  {id: 3, name: 'Express', level: 'Intermediaire'},
  {id: 4, name: 'NoSQL', level: 'Intermediaire'},
  {id: 5, name: 'PHP', level: 'Base'},
  {id: 6, name: 'GitHub', level: 'Intermediaire'},
  {id: 7, name: 'Java', level: 'Base'},
];
function Experiences() {
  return (
    <section className="section section--card experiences" id='experiences'>
      <div className="section__title">
        <span className='text--xs'>mes compétences</span>
        <h3>Mon experiences</h3>
      </div>

      <div className="container--card">
        <div className="card">
          <h3>FrontEnd</h3>
          <div className="experiences__container__ability">

            {abilityFront.map((ability) => {
              return (
                <div key={ability.id} className="experiences__ability">
                  <i className='bx bxs-badge-check bx-sm'></i>
                  <div className="experiences__ability-text">
                    <h4>{ability.name}</h4>
                    <span className='text--xs'>{ability.level}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        <div className="card">
          <h3>BackEnd</h3>
          <div className="experiences__container__ability">
            { abilityBack.map((ability) => {
              return (
                <div key={ability.id} className="experiences__ability">
                  <i className='bx bxs-badge-check bx-sm'></i>
                  <div className="experiences__ability-text">
                    <h4>{ability.name}</h4>
                    <span className='text--xs'>{ability.level}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
