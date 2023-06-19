import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
 
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            </div>
            <h5 className='client__name'> Roddick</h5>
            <small className='client__review'>
            I appreciate your hard work.
You are the best at what you do.
You have a talent for attention to detail, and it shows in your work.
You continue to amaze us with your talent and dedication.
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar Two" />
            </div>
            <h5 className='client__name'> Egbe Reef</h5>
            <small className='client__review'>
            You have a talent for attention to detail, and it shows in your work.
You continue to amaze us with your talent and dedication.
Thank you for being an amazing coworker.
I can always count on you.
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar Three" />
            </div>
            <h5 className='client__name'> Enow Roy</h5>
            <small className='client__review'>
            I appreciate your hard work.
You are the best at what you do.
You have a talent for attention to detail, and it shows in your work.
You continue to amaze us with your talent and dedication.
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar Four" />
            </div>
            <h5 className='client__name'> Ngou Ralph</h5>
            <small className='client__review'>
            Great work. Your problem-solving skills are second to none. 

 Your skills and abilities are perfect for your job, and you really make a difference.

 Thank you for always being dependable. Its great to know I can count on you.

You are definitely in a different league. Its fun to work with you because you have new ideas.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials