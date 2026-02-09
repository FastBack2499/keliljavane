import { Phone, TelegramFill, WhatsappFill } from 'akar-icons'

function Footer() {

  return (
    <footer className='flex items-center justify-center w-full lg:px-28 px-0 md:px-14 bg-[#f5f5f5] '>

      <div className='flex items-center justify-between bottom-0 w-full h-[55px] lg:h-[73px] bg-[#F0693E] rounded-none md:rounded-t-lg px-5 text-white'>

        <div className='flex items-center justify-center text-lg md:text-3xl font-sogand cursor-pointer gap-x-0.5'>
          کلیل جوانه
        </div>

        <div className='hidden sm:flex flex-row-reverse gap-x-1 items-center justify-center ml-10'>
          <p className='font-vazir leading-7  text-sm'>
            طراحی شده توسط
          </p>

          <a href='https://fastback2499.github.io/' aria-label='Developer' target='_blank' rel="noreferrer" className='font-vazir leading-7  text-sm font-semibold hover:scale-105 transition-all duration-300'>
             رهام اسماعیلی
          </a>
        </div>

        <div className='flex items-center justify-center gap-x-5 pr-2'>
          {/* <a href='tel:09133181977' className='font-vazir leading-7  text-sm font-bold hover:scale-105 transition-all duration-300 hidden md:block'>
            09133181977
          </a>
          <span className='mb-[5px] hidden md:block'>
             | 
          </span> */}
          <a href='tel:09133181977' aria-label='Phone Number' className='font-vazir leading-7 text-sm font-bold hover:scale-110 transition-all duration-300'>
            <Phone strokeWidth={2} size={30} />
          </a>
          <a href='https://t.me/Keliljavane' aria-label='Telegram'  target='_blank' rel="noreferrer" className='font-vazir leading-7  text-sm font-bold hover:scale-110 transition-all duration-300'>
            <TelegramFill strokeWidth={2} size={30} />
          </a>
          <a href='https://Wa.me/+989133181977' aria-label='Whatsapp'  target='_blank' rel="noreferrer" className='font-vazir leading-7  text-sm font-bold hover:scale-110 transition-all duration-300'>
            <WhatsappFill strokeWidth={2} size={30} />
          </a>
        </div>

      </div>

    </footer>
  )
}

export default Footer