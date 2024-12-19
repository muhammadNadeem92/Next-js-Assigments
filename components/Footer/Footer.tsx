import Style from './footer.module.css'
import React from 'react'

function Footer() {
  return (
    <div>
        <footer className={Style.footer}>
            <p className={Style.p}>&copy;2024 Next js website</p>
        </footer>
    </div>
  )
}

export default Footer