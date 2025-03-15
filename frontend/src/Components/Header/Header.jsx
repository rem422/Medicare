import {useEffect, useRef} from 'react'
import Logo from '../../assets/images/logo.png'
import UserImg from '../../assets/images/avatar-icon.png'
import { NavLink, Link } from'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { IoMdClose } from "react-icons/io";

const navLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/doctors',
    display: 'Find a Doctor',
  },
  {
    path: '/services',
    display: 'Services',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
]

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    })
  }

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  // const [toggle, setToggle] = useState(false);

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
  // const toggledMenu = () => {
  //   setToggle(!toggle);
  // };


  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className="container">
        <div className='flex items-center justify-between'>
          {/*================== Logo ==================*/}
          <div>
            <img src={Logo} alt='Medicare Logo' className='logo' />
          </div>
          {/*================== Navbar Menu ==================*/}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {
                navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink 
                      to={link.path} 
                      className={navClass => 
                        navClass.isActive 
                          ? "text-primaryColor text-[16px] leading-7 font-[600]" 
                          : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor" 
                      }
                      >
                        {link.display}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          {/*================== Nav right ==================*/}
          <div className='flex items-center gap-4'>
            <div className='hidden'>
              <Link to='/'>
              <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                <img src={UserImg} className='w-full rounded-full' alt="user" />
              </figure>
              </Link>
            </div>
            <Link to='/login'>
                <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-md'>Login</button>
            </Link>
            <span className='md:hidden' onClick={toggleMenu}>
              {/* {!toggle ? <IoMdClose className='w-6 h-6 text-primaryColor' /> : <BiMenu className='w-6 h-6 text-primaryColor' /> } */}
              <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header