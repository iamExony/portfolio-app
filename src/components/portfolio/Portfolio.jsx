import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio/portfolio1.png'
import IMG2 from '../../assets/portfolio/portfolio2.png'
import IMG3 from '../../assets/portfolio/portfolio3.png'


const data = [
  {
    id: 1,
    image: IMG2,
    title: "Disease Prediction App",
    github: "https://github.com/iamExony/disease_webapp",
    demo: "https://diseasewebapp-5asvrngsubrueygesc7avn.streamlit.app/",
  },
  {
    id: 2,
    image: IMG1,
    title: "Color Generator Application",
    github: "https://github.com/iamExony/List-Colors",
    demo: "https://color-generator-iamexony.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Movie Application",
    github: "https://github.com/iamExony/hngstage_2",
    demo: "https://hngstage-2.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

    <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return (
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github}   className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
        
        
      </div>
    </section >
  )
}

export default Portfolio