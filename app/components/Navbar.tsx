import 'animate.css';

function Navbar() {

  // const [toggle,setToggle] = useState(false)

  // const navbarLinks = [
  //   { title: 'خانه', link: '/' },
  //   { title: 'درباره ما', link: '/about' },
  //   { title: 'تماس با ما', link: '/contact' },
  //   { title: 'بلاگ', link: '/blog' }
  // ]

  // const pathname = usePathname()
  // const router = useRouter()
  
  return (
    <nav className='flex w-full justify-end items-center p-4 md:pt-8 md:pb-4 md:px-12 '>

      <div className='flex items-center justify-center text-3xl md:text-4xl  font-sogand gap-x-0.5'>
        کلیل جوانه
      </div>

      {/* <div className='hidden sm:flex items-center justify-center gap-x-10 text-lg md:text-xl font-bhelal'>
        {navbarLinks.map((link, index) => (
          <a key={index} href={link.link} onClick={(e: any) => {
            
            e.preventDefault()

            if (pathname === link.link) {
              window.scrollTo(0, 0)
            } else {
              router.push(link.link)
            }
            
          }} className={ `hover:scale-110 transition-all duration-200 ${pathname === link.link && 'font-bold'}`}>
            {link.title}
          </a>
        ))}
      </div>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div className="" onClick={() => setToggle((prev) => !prev)}>
            { toggle ? <XSmall size={28} /> : <TextAlignJustified size={28} />}
          </div>

          <div
              className={`${ toggle
                ? 'animate__animated animate__fadeInTopRight'
                : 'hidden' } p-4 bg-black/50 backdrop-blur-md z-50 absolute top-14 right-0 mx-4 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1 gap-y-1">
              {navbarLinks.map((link, index) => (
                <a key={index} href={link.link} onClick={(e: any) => {
                  
                  e.preventDefault()

                  if (pathname === link.link) {
                    window.scrollTo(0, 0)
                  } else {
                    router.push(link.link)
                  }
                  
                }} className={ `text-lg font-bhelal hover:scale-110 transition-all duration-200 text-gray-200 ${pathname === link.link && 'font-bold'}`}>
                  {link.title}
                </a>
              ))}
            </ul>
          </div>

        </div> */}

    </nav>
  )
}

export default Navbar