import React from 'react'
import { Image as AntdImage } from 'antd'
import toUseImage from '../assets/toUseImage.png'
import { EyeOpen } from 'akar-icons'

function ToUse() {

  const inJavaneh = [
    {
      id: 1,
      title: 'کربوهیدرات',
      description: '54%'
    },
    {
      id: 2,
      title: 'پروتئین',
      description: '23%'
    },
    {
      id: 3,
      title: 'چربی',
      description: '23%'
    },
    {
      id: 4,
      title: 'فیبر',
      description: '13.2%'
    },
    {
      id: 5,
      title: 'ویتامین E',
      description: '149.4 میلی گرم'
    },
    {
      id: 6,
      title: 'ویتامین B3',
      description: '3.3 میلی گرم'
    },
    {
      id: 7,
      title: 'ویتامین B2',
      description: '0.72 میلی گرم'
    },
    {
      id: 8,
      title: 'ویتامین B1',
      description: '2.01 میلی گرم'
    },
  ]

  const acidsJavaneh = [
    {
      id: 1,
      title: 'لینولنیک (امگا 6)',
      description: '55 گرم'
    },
    {
      id: 2,
      title: 'لینولنیک (امگا 3)',
      description: '7 گرم'
    },
    {
      id: 3,
      title: 'پالمیتیک',
      description: '16 گرم'
    },
    {
      id: 4,
      title: 'اولتیک',
      description: '14 گرم'
    },
  ]

  const whatIsJavaneh = [
    {
      id: 1,
      title: 'گیاهک',
      description: 'حدود ۰/۱ درصد وزن دانه را تشکیل می دهد و حاوی ویتامین چربی ، پروتئین و املاح می باشد. مکمل بسیار مطلوبی برای سنین مختلف می باشد. در فرایند آسیاب از آرد جدا می شود.'
    },
    {
      id: 2,
      title: 'پوسته',
      description: 'حدود ۲۰ درصد وزن دانه را تشکیل می دهد و حاوی مواد معدنی پروتئین مقدار زیادی فیبر و سایر قندها میباشد. پوسته به صورت سبوس عرضه و مصرف می شود.'
    },
    {
      id: 3,
      title: 'آندوسپرم',
      description: 'حدود ۸۰ درصد وزن دانه را تشکیل می دهد و ترکیب عمده آن نشاسته پروتئین و مواد معدنی میباشد. انواع مختلف آرد از این قسمت دانه انواع مختلف آرد از این قسمت دانه گندم ساخته می شود.'
    },
  ]

  return (
    <div className='flex flex-col items-center justify-center w-full p-10 bg-[#f5f5f5] gap-y-10 rounded-t-[60px]'>

      <div className='flex flex-col items-center justify-center w-full gap-y-5'>

        <div className='flex items-center justify-center text-center'>

          <h1 className='font-vazir leading-7  font-bold text-3xl md:text-5xl px-6 pb-2 border-b-4 border-green-700'>
            گیاهک گندم
          </h1>

        </div>

        <div className='flex items-center justify-center '>

          <div className='flex flex-col items-center justify-center p-5 rounded-lg bg-black/10 shadow-lg ultraSmall:w-[310px] verySmall:w-[340px] small:w-[380px] md:w-[600px] text-right rtl font-vazir leading-7  text-sm text-black/75'>
            گیاهک گندم غنی ترین ماده غذایی طبیعی از نظر ویتامین E و حاوی مواد معدنی مورد نیاز بدن از قبیل کلسیم ، آهن ، منیزیم ، منگنز، سلنیوم روی ، اسید فولیک و همچنین پروتئین و فیبر می باشد.
          </div>

        </div>

      </div>

      <div className='flex flex-col items-center justify-center w-full gap-y-5'>

        <div className='flex items-center justify-center text-center'>

          <h2 className='font-vazir leading-7  font-bold text-3xl md:text-5xl px-6 pb-2 border-b-4 border-green-700'>
            روش استفاده
          </h2>

        </div>

        <div className='flex items-center justify-center '>

          <div className='flex flex-col items-center justify-center p-5 rounded-lg bg-black/10 shadow-lg ultraSmall:w-[310px] verySmall:w-[340px] small:w-[380px] md:w-[600px] text-right rtl font-vazir leading-7 text-sm text-black/75 '>
            مصرف گیاهک گندم بصورت خام یا بصورت خشک رایج است. گیاهک گندم غنی ترین ماده غذایی طبیعی از نظر ویتامین E و حاوی مواد معدنی مورد نیاز بدن از قبیل کلسیم ، آهن ، منیزیم ، منگنز، سلنیوم روی ، اسید فولیک و همچنین پروتئین و فیبر می باشد. می توان گیاهک گندم را در انواع سالاد ، سوپ ، آش ، انواع کتلت ، انواع خورشت ها و به عنوان یکی از مواد سازنده سس ها استفاده کرد. با اضافه کردن آن به وعده صبحانه مانند ریختن روی پنیر و... و به عنوان میان وعده با شیر با ماست از ریز مغذی های آن نهایت بهره را برد. قبل از غذا با افزودن آن به سالاد کاهو نه تنها ترکیبات غذایی آن به راحتی جذب بدن می شود، بلکه با ایجاد نوعی سیری از مصرف بیش از حد غذا جلوگیری میکند. با آسیاب کردن آن و مخلوط کردن با آب میوه ها یا گلاب به عنوان ماسک صورت جهت شادابی پوست می توان از آن استفاده کرد.
          </div>

        </div>
        
      </div>

      <div className='flex flex-col items-center justify-center w-full gap-y-5'>

        <div className='flex items-center justify-center text-center'>

          <h2 className='font-vazir leading-7  font-bold text-3xl md:text-5xl px-6 pb-2 border-b-4 border-green-700'>
            ویژگی های درمانی
          </h2>

        </div>

        <div className='flex items-center justify-center '>

          <ul className='list-disc list-inside flex flex-col items-start justify-center p-5 rounded-lg bg-black/10 shadow-lg ultraSmall:w-[310px] verySmall:w-[340px] small:w-[380px] md:w-[600px] text-right rtl font-vazir leading-7  text-sm text-black/75 gap-y-2'>
            <li>
            ویتامین E موجود در آن به عنوان اکسیر جوانی عمل می کند.
            </li>
            <li>
            سلنیوم و منیزیم آن در پیشگیری از ابتلا به انواع سرطان ها موثر شناخته شده است.
            </li>
            <li>
            گیاهک گندم در درمان ریزش مو رفع انواع جوش صورت و ناراحتی پوستی موثر است.
            </li>
            <li>
            در درمان یبوست ، خستگی و بی حالی ، پایین آوردن کلسترول و تری گلیسرید موثر است.
            </li>
            <li>
            به علت وجود فیبر مناسب در کاهش بیماری های قلبی عروقی و جلوگیری از دیابت موثر است.
            </li>
            <li>
            گیاهک گندم باعث زیبایی ، طراوت و لطافت پوست شده از بروز ناراحتی های پوستی جلوگیری می نماید.
            </li>
          </ul>

        </div>

      </div>

      <div className='flex flex-col items-center justify-center w-full gap-y-5'>

          <div className='flex items-center justify-center text-center'>

            <h2 className='font-vazir leading-7  font-bold text-3xl md:text-5xl px-6 pb-2 border-b-4 border-green-700'>
              ترکیبات غذایی
            </h2>

          </div>

          <div className='flex flex-col items-center justify-center pt-5 px-5 pb-4 gap-y-4 rounded-lg bg-black/10 shadow-lg ultraSmall:w-[310px] verySmall:w-[340px] small:w-[380px] md:w-[600px] text-right rtl font-vazir leading-7  text-sm text-black/75'>

            <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-3 text-center pt-1 sm:px-0'>

              {
                inJavaneh.map(({id, title, description}) => (
                  <div key={id} className='hover:scale-105 duration-500 transition-all py-2 rounded-lg border-2 shadow-md bg-black/5 flex items-center justify-center flex-col gap-y-4'>
                    <p className='text-lg md:text-xl font-bold font-vazir leading-7 '>{title}</p>
                    <p className='text-base md:text-lg font-vazir leading-7 '>{description}</p>
                  </div>
                ))
              }

            </div>

            <h3 className='flex items-center justify-center text-lg font-bold py-3 px-4 bg-black/10 rounded-full'>
              در 100 گرم جوانه گندم
            </h3>

          </div>

        </div>

        <div className='flex flex-col items-center justify-center w-full gap-y-5'>

          <div className='flex items-center justify-center text-center'>

            <p className='font-vazir leading-7  font-bold text-3xl md:text-5xl px-6 pb-2 border-b-4 border-green-700'>
              اسید های چرب
            </p>

          </div>

          <div className='flex flex-col items-center justify-center pt-5 px-5 pb-4 gap-y-4 rounded-lg bg-black/10 shadow-lg ultraSmall:w-[310px] verySmall:w-[340px] small:w-[380px] md:w-[600px] text-right rtl font-vazir leading-7  text-sm text-black/75'>

            <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-3 text-center pt-1 sm:px-0'>

              {
                acidsJavaneh.map(({id, title, description}) => (
                  <div key={id} className='hover:scale-105 duration-500 transition-all py-2 rounded-lg border-2 shadow-md bg-black/5 flex items-center justify-center flex-col gap-y-4'>
                    <p className='text-lg font-bold font-vazir leading-7 '>{title}</p>
                    <p className='text-base md:text-lg font-vazir leading-7 '>{description}</p>
                  </div>
                ))
              }

            </div>

            <p className='flex items-center justify-center text-lg font-bold py-3 px-4 bg-black/10 rounded-full'>
              در 100 گرم جوانه گندم
            </p>

            <p>
            لازم به یاد آوری است که اسیدهای چرب اولئیک و لینولئیک موجود در جوانه گندم جزو اسیدهای چرب ضروری هستند. بدین معنی که بدن قادر به ساخت و تولید آنها نیست و باید حتما در جیره غذایی روزانه موجود باشند.
            </p>

          </div>

        </div>

        <div className='flex lg:hidden flex-col items-center justify-center w-full gap-y-5'>

          <div className='flex items-center justify-center text-center'>

            <h1 className='font-vazir leading-7  font-bold text-3xl md:text-5xl px-6 pb-2 border-b-4 border-green-700'>
              اجزای تشکیل دهنده گندم
            </h1>

          </div>

          <div className={`flex lg:hidden items-center justify-center`}>
              
            <AntdImage src={toUseImage.src} preview={{
              mask: <EyeOpen strokeWidth={2} size={36} />
            }} className='rounded-lg' alt='Wheat Parts' width={340}/>

          </div>

          <div className='flex flex-col items-center justify-center p-5 gap-y-6 rounded-lg bg-black/10 shadow-lg ultraSmall:w-[310px] verySmall:w-[340px] small:w-[380px] md:w-[600px] text-right rtl font-vazir leading-7  text-sm text-black/75'>

            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-3 text-center pt-1 sm:px-0'>

              {
                whatIsJavaneh.map(({id, title, description}) => (
                  <div key={id} className='hover:scale-105 duration-500 transition-all py-2 px-3 rounded-lg border-2 shadow-md bg-black/5 flex items-center justify-normal flex-col gap-y-2'>
                    <p className='text-lg font-bold font-vazir leading-7 '>{title}</p>
                    <p className='text-right text-sm font-vazir leading-7 '>{description}</p>
                  </div>
                ))
              }

            </div>

            <p className='flex items-center justify-center text-[15px] font-bold py-3 px-6 bg-black/10 rounded-full'>
              گیاهک جوانه گندم با گندم جوانه زده که از رشد دانه گندم به عمل می آید متفاوت است.
            </p>

          </div>

        </div>

        <div className='lg:flex hidden flex-col items-center justify-center w-full gap-y-5'>

          <div className='flex items-center justify-center text-center'>

            <h1 className='font-vazir leading-7  font-bold text-3xl md:text-5xl px-6 pb-2 border-b-4 border-green-700'>
              اجزای تشکیل دهنده گندم
            </h1>

          </div>

          <div className='flex items-center justify-center gap-x-5'>

            <AntdImage src={toUseImage.src} preview={{
              mask: <EyeOpen strokeWidth={2} size={36} />
            }} className='rounded-lg' alt='Wheat Parts' width={283}/>

            <div className='flex flex-col items-center justify-center p-5 gap-y-6 rounded-lg bg-black/10 shadow-lg ultraSmall:w-[310px] verySmall:w-[340px] small:w-[380px] md:w-[600px] text-right rtl font-vazir leading-7  text-sm text-black/75'>

              <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-3 text-center pt-1 sm:px-0'>

                {
                  whatIsJavaneh.map(({id, title, description}) => (
                    <div key={id} className='hover:scale-105 duration-500 transition-all py-2 px-3 rounded-lg border-2 shadow-md bg-black/5 flex items-center justify-normal flex-col gap-y-2'>

                      <h2 className='text-lg font-bold font-vazir leading-7 '>
                        {title}
                      </h2>

                      <p className='text-right text-sm font-vazir leading-7 '>
                        {description}
                      </p>
                      
                    </div>
                  ))
                }

              </div>

              <h3 className='flex items-center justify-center text-[15px] font-bold py-3 px-6 bg-black/10 rounded-full'>
                گیاهک جوانه گندم با گندم جوانه زده که از رشد دانه گندم به عمل می آید متفاوت است.
              </h3>

            </div>

          </div>

        </div>

    </div>
  )
}

export default ToUse