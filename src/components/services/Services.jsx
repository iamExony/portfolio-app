import React from 'react'
import './services.css'
import{BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
          <h3>Brand Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Logo Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Brochure Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Flyer Design</p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX */}
        <article className="service">
          <div className="service__head">
          <h3>Website Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Blog</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Management System</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Recruitment Portal</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cooperate Website</p>
            </li>
          </ul>
        </article>
        {/*END OF Website Development 
        <article className="service">
          <div className="service__head">
          <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>*/}
        {/*END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services