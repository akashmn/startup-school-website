import React, { useEffect, useState } from 'react'
import demo1 from '../assets/demo.png'
import demo2 from '../assets/demo2.webp'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data = [
  {
    image: demo2,
    course: "Course",
    details: "Course details, mentors, and others"
  },
  {
    image: demo1,
    course: "Course",
    details: "Course details, mentors, and others"
  },
  {
    image: demo2,
    course: "Course",
    details: "Course details, mentors, and others"
  },
]


export default function Programs() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [noSlides, setNoSlides] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 800) {
        setNoSlides(1);
      } else if (width >= 800 && width <=1250) {
        setNoSlides(2);
      } else {
        setNoSlides(3);
      }

      setWindowWidth(width);
    };

    handleResize(); // Initial setup

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className="h-screen w-full flex flex-col items-center mt-20">
        <div className="text-ttOrange uppercase font-semibold tracking-widest">Programs</div>
        <div className="space-grotesk text-[45px] w-2/3 text-center font-bold mt-4 max-sm:text-3xl max-md:text-3xl max-lg:text-3xl">Are you budding founder? We have the perfect program for you.</div>

        <div className='flex flex-row h-92 mt-20 w-2/3 justify-center  overflow-hidden'>


        <Swiper
      // install Swiper modules
    
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={noSlides}
      //navigation
      spaceBetween={10}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
     className='flex items-center max-sm:ml-16 max-md:ml-32'
    >
      <SwiperSlide><div className='flex flex-col w-56 h-full pb-5 justify-center '>
              <img className='h-48 rounded-t-lg' src={demo1} alt="image" />
              <div className='flex  flex-col w-56 p-3'>
                <p className='text-md font-bold'>Course</p>
                <p className='text-xs font-light'>Course details, mentors, and others </p>
              </div>
            </div></SwiperSlide>
      <SwiperSlide><div className=' flex flex-col w-56 h-full '>
              <img className='h-48 rounded-t-lg' src={demo1} alt="image" />
              <div className='flex  flex-col w-full p-3'>
                <p className='text-md font-bold'>Course</p>
                <p className='text-xs font-light'>Course details, mentors, and others </p>
              </div>
            </div></SwiperSlide>
      <SwiperSlide><div className=' flex flex-col w-56 h-full'>
              <img className='h-48 rounded-t-lg' src={demo1} alt="image" />
              <div className='flex  flex-col w-full p-3'>
                <p className='text-md font-bold'>Course</p>
                <p className='text-xs font-light'>Course details, mentors, and others </p>
              </div>
            </div></SwiperSlide>
      <SwiperSlide><div className=' flex flex-col w-56 h-full '>
              <img className='h-48 rounded-t-lg' src={demo1} alt="image" />
              <div className='flex  flex-col w-full p-3'>
                <p className='text-md font-bold'>Course</p>
                <p className='text-xs font-light'>Course details, mentors, and others </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide><div className=' flex flex-col w-56 h-full'>
              <img className='h-48 rounded-t-lg' src={demo1} alt="image" />
              <div className='flex  flex-col w-full p-3'>
                <p className='text-md font-bold'>Course</p>
                <p className='text-xs font-light'>Course details, mentors, and others </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide><div className=' flex flex-col w-56 h-full'>
              <img className='h-48 rounded-t-lg' src={demo1} alt="image" />
              <div className='flex  flex-col w-full p-3'>
                <p className='text-md font-bold'>Course</p>
                <p className='text-xs font-light'>Course details, mentors, and others </p>
              </div>
            </div></SwiperSlide>
    </Swiper>
    </div>

      </section>
    </>
  )
}

