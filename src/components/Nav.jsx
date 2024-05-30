import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants/index'
import { useState } from 'react'

// pending to implement hamburger menu
const Nav = () => {
  const [ nav, setNav ] = useState(false)

  console.log('nav status', nav);

  const handleClick = () => setNav(!nav)

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29}/>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map( item => (
            <li key={item.label}>
              <a href={item.href} className="font-monserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='lg:hidden'>
          <button onClick={handleClick}>
            {nav ? <div>X</div> : <img src={hamburger} alt="Hamburger" width={25} height={25} />}
          </button>
          {nav ? <div>Hey</div> : null}
        </div>
      </nav>
    </header>
  )
}

export default Nav