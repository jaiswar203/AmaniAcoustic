import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import React from 'react';
import SwiperCore from 'swiper/core'
import 'swiper/css';
// Import Swiper styles


SwiperCore.use([Autoplay]);

const CaseStudy = () => {
    const setting = {
        breakpoints: {
            340: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
        },
        spaceBetween:10,
        slidesPerView:1,
        autoplay:{
            // delay: 10000,
            disableOnInteraction: true
        }
    }
    return (
        <>
            <div className="case-study">
                <div className="case-study-title">
                    <h1>Our Client :-</h1>
                </div>
                <div className="case-study-carousel">
                    <Swiper {...setting}
                    >
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://amanacoustic.com/wp-content/uploads/2018/05/Mothership-Productions01.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://amanacoustic.com/wp-content/uploads/2018/05/after-studio01.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://amanacoustic.com/wp-content/uploads/2018/05/AuralMayhem-Studios01.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://amanacoustic.com/wp-content/uploads/2018/05/disney-walt001.png" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://amanacoustic.com/wp-content/uploads/2018/05/The-Word-Jockey-Creative-Content-Studio01.png" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://amanacoustic.com/wp-content/uploads/2018/05/Subhash-Studios001.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                    </Swiper>
                </div>
                <br />
                <br />
                <div className="case-study-carousel">
                    <Swiper {...setting}
                    >
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://amanacoustic.com/wp-content/uploads/2018/05/RAGHAV-SACHAR111.jpeg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://amanacoustic.com/wp-content/uploads/2018/05/Udit-Narayan01.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://amanacoustic.com/wp-content/uploads/2018/05/aditya-udit-narayan01.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://amanacoustic.com/wp-content/uploads/2018/05/ajay-chakravarthy011.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://amanacoustic.com/wp-content/uploads/2018/05/sudesh-bhosle01.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        {/* <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://amanacoustic.com/wp-content/uploads/2018/05/sudesh-bhosle01.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide> */}
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://amanacoustic.com/wp-content/uploads/2018/05/Samira-Koppikar001.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default CaseStudy
