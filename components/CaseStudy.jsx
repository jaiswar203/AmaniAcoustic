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
                                <img src="https://content3.jdmagicbox.com/comp/mumbai/i3/022pxx22.xx22.151024163400.r9i3/catalogue/mothership-productions-bandra-west-mumbai-audio-visual-presentation-services-76hw3zymqx.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://we-are-the-makers.com/wp-content/uploads/cache/images/AfterStudio_logo/AfterStudio_logo-1947533471.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://content3.jdmagicbox.com/comp/mumbai/p8/022pxx22.xx22.181001160356.n4p8/catalogue/auralmayhem-andheri-west-mumbai-1rzmotigs8.jpg?clr=524714" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://www.pngitem.com/pimgs/m/185-1859460_walt-disney-studios-logo-png-transparent-png.png" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://pbs.twimg.com/profile_images/763796013698080769/3BUURVAX.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://images.squarespace-cdn.com/content/v1/57a468dd29687f89223d0781/1470393019923-Y9N59H2QZB6GU1MQKGT2/Black+Logo-01.png?format=1500w" alt="" />
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
                                <img src="https://pbs.twimg.com/profile_images/1167713592595996673/2_1xGeNJ_400x400.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://images.hindustantimes.com/img/2021/04/24/550x309/Screenshot_2021-04-24_at_11.21.31_AM_1619244068284_1619244082845.png" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://225508-687545-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/04/Aditya-Narayan.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://thebengalstory.com/english/wp-content/uploads/sites/2/2020/11/ajoy.chakraborty-e1604493428800.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://225508-687545-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/05/Sudesh-Bhosle-photo.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                        {/* <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://amanacoustic.com/wp-content/uploads/2018/05/sudesh-bhosle01.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide> */}
                        <SwiperSlide className="case-study-img">
                            <a href="#">
                                <img src="https://pbs.twimg.com/profile_images/867971957257519104/mIP7akjn_400x400.jpg" alt="" />
                            </a>
                            
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default CaseStudy
