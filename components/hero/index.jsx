/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row justify-around'>
            <div className='flex-1'>
                <h1 className="font-black text-white mb-2 font-outfit">
                    Hello! <span className="text-gradient">I'm Syarif.</span>
                </h1>
                <p className="max-w-[300px] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet error
                    voluptatum soluta molestias.
                </p>
            </div>
            <div className='relative'>
                <img src="./assets/robot.png" alt="robot" className='w-[50%] h-[100%] z-[5] relative' />
                <div className='z-[0] absolute w-[40%] h-[35%] top-0 pink__gradient' />
                <div className='z-[1] absolute w-[80%] h-[80%] bottom-40 rounded-full white__gradient' />
                <div className='z-[0] absolute w-[50%] h-[50%] right-20 bottom-20 rounded-full blue__gradient' />
            </div>
        </div >
    )
}

export default Hero