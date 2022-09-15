/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { GetHome } from '../../services/services'
import parse from 'html-react-parser'
import Image from 'next/image'
import OwnImage from '../../helper/Image'
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
                            <Image src={ROOT_API + response.attributes.heroPicture.data.attributes.url} alt="robot" className='max-w-full mx-auto z-[5] relative' width='500px' height='400px' />
                        )
                    }
                    <div className='z-[0] absolute w-[50%] h-[50%] top-0 pink__gradient motion-safe:animate-spin' />
                    <div className='z-[0] absolute w-[50%] h-[50%] right-0 bottom-0 rounded-full blue__gradient scale-150' />
                </div>
            </div>
        </div >
    )
}

export default Hero