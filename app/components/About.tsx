import Image from 'next/image'
import aboutImage from '../assets/aboutImage.png'

function About() {
  return (
    <div className='flex flex-col lg:flex-row relative justify-center -mt-14 rounded-t-[60px] bg-white w-full pt-20 pb-16 sm:gap-x-16 gap-y-16'>

      <div className='flex flex-col pt-10 items-center sm:justify-start justify-center'>

        <Image src={aboutImage} alt='About Image' width={400} height={212}/>

        <div className='w-[300px] md:w-[420px] -mt-10 flex items-center justify-center py-2.5 rounded-full bg-green-600 text-white font-traffic leading-7  font-bold text-xl'>
          با بیش از 30 سال سابقه
        </div>

      </div>

      <div className='flex flex-col items-center justify-end gap-y-6 lg:gap-x-16 right-0'>

        <div className=' flex flex-col items-end justify-end w-[330px] verySmall:w-[340px] gap-y-2 small:w-[390px] md:w-[450px]'>
          
          <div className='flex flex-col text-3xl md:text-5xl gap-y-4 items-end'>

            <h2 className='text-green-800 font-vazir leading-7  font-bold'>
            کیفیت بالا
            </h2>

            <h2 className='text-black/80 font-vazir leading-7  font-bold'>
            بدون مواد نگهدارنده
            </h2>

          </div>

          <div className='py-5 flex items-center justify-end text-right rtl w-full gap-y-10'>

            <p className='font-vazir leading-7 '>
              پودر گیاهک جنین گندم کلیل جوانه منبعی غنی و بسیار مغذی از مواد ضروری از جمله انواع ویتامین‌ها، مواد معدنی، پروتئین‌های گیاهی و در نهایت فیبر غذایی است. این محصول به‌ویژه سرشار از ویتامین‌های گروه B همانند تیامین، فولات و همچنین ویتامین E است. قسمت رشد کرده جوانه گندم را جنین جوانه گندم یا همان گیاهک گندم  می‌نامند که حامل اطلاعات ژنتیکی برای رشد دانه است. جنین گندم با جوانه گندم کاملاً متفاوت است، زیرا جوانه گندم از رشد دانه گندم به دست می‌آید؛ اما جنین گندم بخش کوچکی در عمق هر دانه گندم است و جزو مهم‌ترین منبع تغذیه گندم محسوب می‌شود. پودر گیاهک جنین گندم کلیل جوانه با رعایت اصول استاندارد طی مراحلی تولید و بسته‌بندی می‌شود.
            </p>

          </div>

        </div>
          
        <div className='flex items-center justify-center px-3 border-r-2 border-green-600 ultraSmall:w-[320px] verySmall:w-[360px] small:w-[390px] md:w-[450px]'>

          <p className='font-vazir leading-7  italic text-sm text-black/50 text-right rtl text-ellipsis'>
            به علت وجود اسیدهای چرب غیر اشباع و اسیدهای چرب ضروری به میزان فراوان مدت زمان ماندگاری آن بسیار کوتاه و حدود یک هفته می باشد که با توجه به انجام تحقیقات در این زمینه بدون استفاده از هرگونه نگهدارنده مجاز و غیر مجاز مدت زمان ماندگاری آن را به ۸ ماه ارتقاء داده ایم. با پودر کردن آن و مخلوط کردن با گلاب آب میوه فصل و حتی ماست شیرین و تهیه خمیر می توان به عنوان ماسک صورت برای طراوت هر چه بیشتر پوست صورت از آن استفاده کرد. در بررسی علمی به عمل آمده در سال ۸۹ بر روی ۳۵ نفر مرد و زن در سنین بین ۶۵ تا ۷۵ سال که به طور روزانه ۲۰ گرم از این محصول استفاده می کردند میزان چربی خون ایشان از مقدیر بالای ۳۵۰ به کمتر از ۲۰۰ رسیده است که تاثیر وجود اسیدهای چرب ضروری و وجود فیبر مناسب در آن می باشد.
          </p>

        </div>

      </div>  
          

    </div>
  )
}

export default About