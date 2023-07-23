import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slide1 from "./../assets/g1.jpg";
import slide2 from "./../assets/g2.jpeg";
import slide3 from "./../assets/g3.jpg";
import slide4 from "./../assets/g4.jpg";
import slide5 from "./../assets/g5.jpeg";
import slide6 from "./../assets/g6.jpeg";
import slide7 from "./../assets/g7.jpg";
import slide8 from "./../assets/g8.jpeg";
import slide9 from "./../assets/g9.webp";
import slide10 from "./../assets/g10.jpg";
import slide11 from "./../assets/g11.jpeg";
const GraduatedImage = () => {
    return (
        <>
            <div className='lg:hidden'>
                <div className='mx-[2vw] '>
                    <h1 className='text-4xl text-center text-orange-300 my-2'>Various college Convocation ceremony Gallery</h1>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <img className='w-[100vw] h-[50vh]' src={slide1} alt="" />
                            <h1 className='text-center text-orange-300 text-2xl my-2'>Oxford college  convocation</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-[100vw] h-[50vh]' src={slide2} alt="" />
                            <h1 className='text-center text-orange-300 text-2xl my-2'>Science college  convocation</h1>

                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-[100vw] h-[50vh]' src={slide3} alt="" />
                            <h1 className='text-center text-orange-300 text-2xl my-2'>Arts college  convocation</h1>

                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-[100vw] h-[50vh]' src={slide4} alt="" />
                            <h1 className='text-center text-orange-300 text-2xl my-2'>Commerce college  convocation</h1>

                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-[100vw] h-[50vh]' src={slide5} alt="" />
                            <h1 className='text-center text-orange-300 text-2xl my-2'>Technology college  convocation</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-[100vw] h-[50vh]' src={slide6} alt="" />
                            <h1 className='text-center text-orange-300 text-2xl my-2'>Oxford college  convocation</h1>

                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-[100vw] h-[50vh]' src={slide7} alt="" />
                            <h1 className='text-center text-orange-300 text-2xl my-2'>Science college  convocation</h1>

                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-[100vw] h-[50vh]' src={slide8} alt="" />
                            <h1 className='text-center text-orange-300 text-2xl my-2'>Arts college  convocation</h1>

                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-[100vw] h-[50vh]' src={slide9} alt="" />
                            <h1 className='text-center text-orange-300 text-2xl my-2'>Commerce college  convocation</h1>

                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-[100vw] h-[50vh]' src={slide10} alt="" />
                            <h1 className='text-center text-orange-300 text-2xl my-2'>Technology college  convocation</h1>

                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-[100vw] h-[50vh]' src={slide11} alt="" />
                            <h1 className='text-center text-orange-300 text-2xl my-2'>Business college  convocation</h1>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='mx-[2vw] hidden sm:block'>
                <h1 className='text-4xl text-center text-orange-300 my-2'>Various college Convocation ceremony Gallery</h1>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <img className='w-[40vw] h-[50vh]' src={slide1} alt="" />
                        <h1 className='text-center text-orange-300 text-2xl my-2'>Oxford college  convocation</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[40vw] h-[50vh]' src={slide2} alt="" />
                        <h1 className='text-center text-orange-300 text-2xl my-2'>Science college  convocation</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[40vw] h-[50vh]' src={slide3} alt="" />
                        <h1 className='text-center text-orange-300 text-2xl my-2'>Arts college  convocation</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[40vw] h-[50vh]' src={slide4} alt="" />
                        <h1 className='text-center text-orange-300 text-2xl my-2'>Commerce college  convocation</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[40vw] h-[50vh]' src={slide5} alt="" />
                        <h1 className='text-center text-orange-300 text-2xl my-2'>Technology college  convocation</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[40vw] h-[50vh]' src={slide6} alt="" />
                        <h1 className='text-center text-orange-300 text-2xl my-2'>Oxford college  convocation</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[40vw] h-[50vh]' src={slide7} alt="" />
                        <h1 className='text-center text-orange-300 text-2xl my-2'>Science college  convocation</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[40vw] h-[50vh]' src={slide8} alt="" />
                        <h1 className='text-center text-orange-300 text-2xl my-2'>Arts college  convocation</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[40vw] h-[50vh]' src={slide9} alt="" />
                        <h1 className='text-center text-orange-300 text-2xl my-2'>Commerce college  convocation</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[40vw] h-[50vh]' src={slide10} alt="" />
                        <h1 className='text-center text-orange-300 text-2xl my-2'>Technology college  convocation</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[40vw] h-[50vh]' src={slide11} alt="" />
                        <h1 className='text-center text-orange-300 text-2xl my-2'>Business college  convocation</h1>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default GraduatedImage;