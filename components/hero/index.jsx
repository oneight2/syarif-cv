/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { GetHome } from '../../services/services'
import parse from 'html-react-parser'
const Hero = () => {
    const response = GetHome()
    const ROOT_API = process.env.NEXT_PUBLIC_API
    return (
        <div className='flex flex-wrap'>
            <div className='w-full self-center px-4 lg:w-1/2'>
                <h1 className="font-black text-white mb-2 font-outfit">
                    Hello! <span className="text-gradient">I'm Syarif</span>
                </h1>
                <p className="max-w-[300px] leading-relaxed font-outfit z-[5]" >
                    {response && (
                        parse(response.attributes.heroText)
                    )}
                    {/* {parse(response ? response.attributes.heroText : 'Loading...')} */}
                </p>
            </div>
            <div className='w-full self-end px-4 lg:w-1/2'>
                <div className='relative mt-10'>
                    {
                        response && (
                            <img src={ROOT_API + response.attributes.heroPicture.data.attributes.url} alt="robot" className='max-w-full mx-auto z-[5] relative' />
                        )
                    }
                    <div className='z-[0] absolute w-[50%] h-[50%] top-0 pink__gradient' />
                    <div className='z-[0] absolute w-[50%] h-[50%] right-0 bottom-0 rounded-full blue__gradient' />
                </div>
            </div>
        </div >
    )
}

export default Hero