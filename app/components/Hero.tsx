'use client'

import Button from './Button'
import Image from 'next/image'

import { Image as AntdImage, Modal } from 'antd'

import { EyeOpen, Health, TelegramFill, WhatsappFill } from 'akar-icons'

import heroImage from '../assets/11.png'
import backdroundImage from '../assets/backgroundHero.png'
import bgImage from '../assets/bgHero.png'

import Card from './Card'
import { useState } from 'react'
import Counter from './Counter'
import { HealthBodyIcon } from '../assets/icons/HealthBodyIcon'
import { HealthIcon } from '../assets/icons/HealthIcon.'

function Hero() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex flex-col items-center justify-between w-full pt-1 gap-y-20  relative '>

      <Modal
        title="ثبت سفارش"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p className='font-vazir rtl'>
          <br/>
          ✅ سفارش‌ها همه‌روزه از ساعت 9 صبح تا 10 شب پذیرفته می‌شوند.
          <br/><br/>
          در صورت داشتن سوال یا نیاز به راهنمایی، تیم ما با خوشحالی پاسخگوست.<br/>
          منتظر تماس شما هستیم! 😊
        </p>

        <p className='font-vazir rtl mt-4 font-semibold'>
          برای ثبت سفارش، با ما تماس بگیرید:
          <br/><br/>
          شماره تماس: <a className='font-vazir rtl mr-1 hover:scale-105 transition-all duration-300' aria-label='Phone Number' href='el:09133181977'>09133181977</a>
        </p>

        <div className='flex items-end justify-end gap-x-5 pr-2 py-5'>
                 
          <a href='https://t.me/Keliljavane' aria-label='Telegram' target='_blank'  rel="noreferrer" className='font-vazir leading-7  text-sm font-bold hover:scale-110 transition-all duration-300'>
            <TelegramFill strokeWidth={2} size={30} />
          </a>

          <a href='https://Wa.me/+989133181977' aria-label='Whatsapp' target='_blank'  rel="noreferrer" className='font-vazir leading-7  text-sm font-bold hover:scale-110 transition-all duration-300'>
            <WhatsappFill strokeWidth={2} size={30} />
          </a>

        </div>

      </Modal>
      
      <Image src={bgImage} alt="Background Hero"  width={1500} height={500} className="absolute w-[1500px] md:w-screen -z-10 bottom-[475px]
       md:bottom-[269px]" />

      <div className='absolute md:hidden -z-10 flex flex-col items-center justify-center w-full ultraSmall: bottom-[250px]'>

        <div className='flex items-center justify-center gap-x-2 md:hidden w-full px-10 py-16 bg-[#31AF5E]'>

          <Card title='سالم' description='تضمین سلامت بالا'>
            <Health className='w-5 h-5 md:w-6 md:h-6'/>
          </Card>

          <Card title='ارگانیک' description='کاملا ارگانیک'>
            <HealthIcon  className='pt-[2px] pl-[0.5px] w-5 h-5 md:w-6 md:h-6'/>
          </Card>

          <Card title='نیاز بدن' description='غنی از مواد معدنی'>
            <HealthBodyIcon  className='pt-[0.5px] pl-[0.5px] w-5 h-5 md:w-6 md:h-6'/>
          </Card>

        </div>

      </div>

      <div className='relative flex flex-col lg:flex-row items-center justify-between gap-x-20 pb-16'>

        <div className='flex flex-col items-center lg:items-start justify-center pt-1 pb-4 verySmall:pb-12 gap-y-1'>

          <div className='flex lg:hidden items-center justify-center pb-10 lg:pb-0 ultraSmall:py-1 ultraSmall:max-w-[210px] verySmall:max-w-56 md:max-w-full small:max-w-64 verySmall:py-10 small:py-2'>

              <AntdImage src={heroImage.src} alt='Hero Image' className='p-1.5' width={400} preview={{
                            mask: <EyeOpen strokeWidth={2} size={36} />
                          }} />

          </div>

          <div className='flex flex-col items-center lg:items-start justify-center pt-1 md:pt-14 gap-y-6'>

            <h1 className='text-xl md:text-4xl font-vazir leading-7 '>
              بدون مواد نگهدارنده
            </h1>

            <div className='flex items-center justify-center text-4xl md:text-7xl font-vazir leading-7  font-bold gap-x-2'>
              
              <h1 className='text-green-800'>
                گندم 
              </h1>

              <h1 className='text-green-800'>
                جنین 
              </h1>

              <h1 className='text-[#595959]'>
                گیاهک
              </h1>

            </div>

            <h1 className='font-vazir leading-7  text-lg md:text-2xl text-[#303030]/70'>
              سایت رسمی گیاهک جنین گندم کلیل جوانه
            </h1>

            <div className='flex items-start justify-center gap-x-6 py-2 ultraSmall:pb-20 verySmall:pb-14 pb-16 pt-1 md:py-5'>

              <Button className='bg-green-600 border-green-800 text-white font-vazir leading-7   hover:scale-105 transition duration-300 ' onClick={showModal}>
                نحوه سفارش
              </Button>

              {/* <Button className='font-vazir leading-7  hover:scale-105 transition duration-300'>
                اخذ شعبه
              </Button> */}

            </div>

            {/* <div className='flex items-center justify-center w-full ultraSmall:pb-20 verySmall:pb-14 pb-16 pt-1 md:py-10'>
              <HorizontalCarousel/>
            </div> */}

          </div>

        </div>

        <div className='flex flex-col justify-between items-center gap-y-5'>
          
          <div className='hidden lg:flex items-center justify-center'>

            <AntdImage src={heroImage.src} alt='Hero Image' width={400} className='p-5' preview={{
                          mask: <EyeOpen strokeWidth={2} size={36} />
                        }}/>

          </div>

          <div className='hidden md:flex items-center justify-center gap-x-10'>

            <Card title='سالم' description='بدون نگهدارنده'>
              <Health strokeWidth={2} size={25} />
            </Card>

            <Card title='ارگانیک' description='کاملا ارگانیک'>
              <HealthIcon size={25} className='pl-[0.5px] pt-[0.5px]'/>
            </Card>

            <Card title='نیاز بدن' description='غنی از مواد معدنی'>
              <HealthBodyIcon size={25} className='pl-[0.5px] pt-[0.5px]' />
            </Card>

          </div>

        </div>

      </div>

      <div className='flex items-center justify-center w-full bg-[#31AF5E]'>

        <div className='relative flex items-center justify-center rounded-t-[60px] pb-5 h-[270px] gap-x-[8px] sm:mall:gap-x-10 md:gap-x-20 w-full bg-green-700 overflow-hidden '>

          <Image src={backdroundImage} alt="Background" className='absolute object-cover' fill />

          <div className="flex flex-col items-center justify-center gap-y-1 z-10 bg-black/20 p-3 sm:p-4 rounded-xl backdrop-blur-sm lg:mb-5">

            <Counter targetNumber={30}/>

            <h1 className="font-vazir leading-7  font-bold text-sm small:text-base sm:text-lg md:text-xl text-white">
              سال سابقه کار
            </h1>

          </div>

          <div className="flex flex-col items-center justify-center gap-y-1 z-10 bg-black/20 p-3 sm:p-4 rounded-xl backdrop-blur-sm lg:mb-5">

            <Counter targetNumber={1000}/>

            <h1 className="font-vazir leading-7  font-bold text-sm small:text-base sm:text-lg md:text-xl text-white">
              مشتری راضی
            </h1>

          </div>

          <div className="flex flex-col items-center justify-center gap-y-1 z-10 bg-black/20 p-3 sm:p-4 rounded-xl backdrop-blur-sm lg:mb-5">

            <Counter targetNumber={100} percent/>

            <h1 className="font-vazir leading-7  font-bold text-sm small:text-base sm:text-lg  md:text-xl text-white">
              اصلی
            </h1>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Hero