import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio/portfolio1.png'
import IMG2 from '../../assets/portfolio/portfolio2.png'
import IMG3 from '../../assets/portfolio/portfolio3.png'


const data = [
  {
    id: 1,
    image: IMG2,
    title: 'Link Tree Application',
    github: 'https://github.com/iamExony/linktree.git',
    demo: 'https://linktree-iamexony.vercel.app/'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Todo List Application',
    github: 'https://github.com/iamExony/Todolist-App.git',
    demo: '#'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Login Dashboard',
    github: 'https://github.com/iamExony/login.git',
    demo: '#'
  }
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