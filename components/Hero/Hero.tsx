import React from 'react'
import Style from '@/components/Hero/hero.module.css'
import Image from 'next/image'

function Hero() {
  return (
    <div>
        <div className={Style.main}>
        <section className={Style.sec}>
           <h1 className={Style.h1}>Better Solution For Your Coding Problems</h1>
           <br /><br /><br />
           <button className={Style.button}>Explore more  </button>

        </section>
        <section className={Style.sec2}>
            <Image src={"/images/coder.png"} alt='hero image' width={500} height={500} className={Style.image}/>
        </section>
        </div>
    </div>
  )
}

export default Hero