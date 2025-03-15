import {useState} from 'react'
import Logo from '../../assets/images/logo.png'
import UserImg from '../../assets/images/avatar-icon.png'
import { NavLink, Link } from'react-router-dom'
import { FiMenu, FiX} from "react-icons/fi";

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

const [toggle, setToggle] = useState(false);

const handleToggle = () => {
  setToggle(!toggle);
}


  return (
    <header className='header flex items-center'>
      <div className="container">
        <div className='flex items-center justify-between'>
          {/*================== Logo ==================*/}
          <div>
            <img src={Logo} alt='Medicare Logo' className='logo' />
          </div>
          {/*================== Navbar Menu ==================*/}
          <div className='navigation' >
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
            <span className='md:hidden' onClick={handleToggle}>
              {toggle ? <FiX className='w-6 h-6 ' /> : <FiMenu className='w-6 h-6' /> }
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header