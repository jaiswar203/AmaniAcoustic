import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import React from 'react';
import SwiperCore from 'swiper/core'
import 'swiper/css';
import Link from 'next/link'

import 'swiper/css';

SwiperCore.use([Autoplay]);
const Services = () => {
    const setting = {
        breakpoints: {
            340: {
                // slidesPerView: 2,
                spaceBetween: 10,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              800:{
                slidesPerView: 3,
                spaceBetween: 10,
              }
        },
        spaceBetween:100,
        slidesPerView:1,
        autoplay:{
            // delay: 10000,
            disableOnInteraction: true
        }
    }
    return (
        <>
            <div className="services">
                <div className="services-title">
                    <h1>Our Services :-</h1>
                </div>
                <div className="services-detail">
                    <Swiper {...setting}>
                    <SwiperSlide className="component">
                        <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBzdHVkaW98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                        <h4>Music Studio</h4>
                        <Link href='/musicstudio'><a><h5> Read More</h5></a></Link>
                    </SwiperSlide>
                    <SwiperSlide className="component">
                        <img src="https://constructionweekonlineindia.storage.googleapis.com/public/styles/full_img/public/images/2020/10/24/office-space.png?itok=LEM6UCv6" alt="" />
                        <h4>Commercial & Offices</h4>
                        <Link href='/commercial'><a><h5> Read More</h5></a></Link>
                    </SwiperSlide>
                    <SwiperSlide className="component">
                        <img src="https://www.bw-engineering.com/wp-content/uploads/2018/09/VOX-MAX-Cinema.jpg" alt="" />
                        <h4>Cinemas & Auditoria</h4>
                        <Link href='/cinemas'><a><h5> Read More</h5></a></Link>
                    </SwiperSlide>
                    <SwiperSlide className="component">
                        <img src="https://www.hushacoustics.co.uk/wp-content/uploads/2016/05/Acoustics-in-Education-1024x682.jpg" alt="" />
                        <h4>Educational</h4>
                        <Link href='/educational'><a><h5> Read More</h5></a></Link>
                    </SwiperSlide>
                    <SwiperSlide className="component">
                        <img src="https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg" alt="" />
                        <h4>Hotel</h4>
                        <Link href='/hotel'><a><h5> Read More</h5></a></Link>
                    </SwiperSlide>
                    <SwiperSlide className="component">
                        <img src="https://www.fcimag.com/ext/resources/Issues/2021/05-May/0521_fci_CSEncore_img1.jpg?t=1620229827&width=900" alt="" />
                        <h4>Healthcare</h4>
                        <Link href='/healthcare'><a><h5> Read More</h5></a></Link>
                    </SwiperSlide>
                    <SwiperSlide className="component">
                        <img src="https://www.armstrongceilings.com/content/dam/armstrongceilings/residential/images/room-scene/office_open_concept_smooth_suspended_ceiling_276.jpg/_jcr_content/renditions/resimagecaptionlarge.1220.826.jpg" alt="" />
                        <h4>Residential </h4>
                        <Link href='/educational'><a><h5> Read More</h5></a></Link>
                    </SwiperSlide>
                    <SwiperSlide className="component">
                        <img src="https://lh3.googleusercontent.com/proxy/efaltB4tO5uYMwdKBs74pOtwrfPJcAv0SK1fS4Z1OrmmQBjLlwXfb8I_18kXo8gOVTIn5KoF5MnKzHSapey77Je2AMrZMB3MnEeYzg7e00L5WSQk9QA_2KzNAmT5rYxsTw" alt="" />
                        <h4>Retail</h4>
                        <Link href='/retail'><a><h5> Read More</h5></a></Link>
                    </SwiperSlide>
                    <SwiperSlide className="component">
                        <img src="https://s3.amazonaws.com/electronichousesite/wp-content/uploads/2017/08/30160914/MusicStudio5-1024x630.jpg" alt="" />
                        <h4>Floating Studio</h4>
                        <Link href='/floatingstudio'><a><h5> Read More</h5></a></Link>
                    </SwiperSlide>
                    <SwiperSlide className="component">
                        <img src="https://www.buildingenclosureonline.com/ext/resources/ARWWCA/Project-Profiles-2018/1-10-18-PintaAcoustic.jpg?1515610995" alt="" />
                        <h4>Interior Designers</h4>
                        <Link href='/educational'><a><h5> Read More</h5></a></Link>
                    </SwiperSlide>
                    <SwiperSlide className="component">
                        <img src="https://perfect-acoustic.com/wp-content/uploads/hifi-exhibition-room-acoustics-design-with-acoustic-absorbers-4.jpg" alt="" />
                        <h4>Home Decor</h4>
                        <Link href='/decor'><a><h5> Read More</h5></a></Link>
                    </SwiperSlide>
                    <SwiperSlide className="component">
                        <img src="https://strongproject.com/office-furniture-blog/wp-content/uploads/2018/07/AcousticFurniture2.jpg" alt="" />
                        <h4>Furniture World</h4>
                        <Link href='/furniture'><a><h5> Read More</h5></a></Link>
                    </SwiperSlide>
                    </Swiper>
                </div>
            </div>   
        </>
    )
}

export default Services
