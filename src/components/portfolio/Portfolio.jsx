import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio/portfolio1.png'
import IMG2 from '../../assets/portfolio/portfolio2.png'
import IMG3 from '../../assets/portfolio/portfolio3.png'
import IMG4 from '../../assets/portfolio/portfolio4.png'
import IMG5 from '../../assets/portfolio/portfolio5.png'
import IMG6 from '../../assets/portfolio/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Dashboard',
    github: 'https://github.com',
    demo: 'https//drible.com/Alien-pixel'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates',
    github: 'https://github.com',
    demo: 'https//drible.com/Alien-pixel'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma Dashboard UI Kit',
    github: 'https://github.com',
    demo: 'https//drible.com/Alien-pixel'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Responsive Web design',
    github: 'https://github.com',
    demo: 'https//drible.com/Alien-pixel'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Template Dashboard',
    github: 'https://github.com',
    demo: 'https//drible.com/Alien-pixel'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Mobile  Development',
    github: 'https://github.com',
    demo: 'https//drible.com/Alien-pixel'
  },
  
]

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