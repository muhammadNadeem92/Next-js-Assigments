import React from 'react'
import Link from 'next/link'
import Style from '@/components/Header/header.module.css'

function Header() {
  return (
    <div>
        <header>
            <nav className={Style.nav}>
                <ul className={Style.ul}>
                    <li className={Style.li}><Link href='/'>Home</Link></li>
                    <li className={Style.li}><Link href='/about'target='_blank'>About</Link></li>
                    <li className={Style.li}><Link href='/contact' target='_blank'>Contact</Link></li>
                    <li className={Style.li}><Link href='/services' target='_blank'>Services</Link></li>
                    
                </ul>
                <button className={Style.button}>Login </button>
                <input type="text" name="search" id="search" placeholder='Search Something Here'  className={Style.input}/>
               
            </nav>
            
           
        </header>
    </div>
  )
}

export default Header