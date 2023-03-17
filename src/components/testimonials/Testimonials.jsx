import React from 'react'
import './testimonials.css'
import AVA1 from '../../assets/testimonial/avatar1.jpg'
import AVA2 from '../../assets/testimonial/avatar2.jpg'
import AVA3 from '../../assets/testimonial/avatar3.jpg'
import AVA4 from '../../assets/testimonial/avatar4.jpg'
// import Swiper core and required modules
import {Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVA1,
    name: 'Lawrence Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum at doloremque ullam quidem itaque praesentium, atque amet necessitatibus reprehenderit fugit officia quaerat aspernatur cum officiis alias asperiores commodi eius est!',
  },
  {
    avatar: AVA2,
    name: 'Emmy Peters',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum at doloremque ullam quidem itaque praesentium, atque amet necessitatibus reprehenderit fugit officia quaerat aspernatur cum officiis alias asperiores commodi eius est!'
  },
  {
    avatar: AVA3,
    name: 'Peter Obi',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum at doloremque ullam quidem itaque praesentium, atque amet necessitatibus reprehenderit fugit officia quaerat aspernatur cum officiis alias asperiores commodi eius est!'
  },
  {
    avatar: AVA4,
    name: 'James Favour',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum at doloremque ullam quidem itaque praesentium, atque amet necessitatibus reprehenderit fugit officia quaerat aspernatur cum officiis alias asperiores commodi eius est!'
  }
]
const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[ Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
          return (
              <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
            <img src={avatar} alt="testimonial" />
          </div>
              <h5 classame='client__name'>{name}</h5>
              <small className="client__review">
                {review}
              </small>
          </SwiperSlide>
          )
        })
      }
       
      </Swiper>
    </section>
  )
}

export default testimonials