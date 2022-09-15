import React from 'react'
import Image from 'next/image'
import { GetSocialMedias } from '../../services/services'
const Contact = () => {
    const response = GetSocialMedias()
    const ROOT_API = process.env.NEXT_PUBLIC_API;
    return (
        <div className='flex flex-wrap px-4'>
            <h1 className='text-white font-black font-outfit'>Find Me</h1>
            <div className='flex w-full self-center mt-10 mx-auto'>
                <div className="mockup-phone w-[320px] hover:drop-shadow-md transition ease-in-out ">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1 max-w-[290px] relative">
                            <Image src="/assets/wallpaper.jpg" className='bg-cover h-[100%] z-[0] absolute' alt="" layout='fill' priority />
                            <div className='flex flex-wrap gap-4'>
                                {response ?
                                    response.map((socialMedia, index) => (
                                        <a href={socialMedia.attributes.link} key={index} className='tooltip drop-shadow-sm transition ease-in-out  hover:-translate-y-1 hover:scale-110' data-tip={`Follow My ${socialMedia.attributes.title}`} target="_blank" rel='noreferrer'>
                                            <Image src={`${ROOT_API}${socialMedia.attributes.icon.data.attributes.url}`} className='w-[64px] h-[64px] z-[10]' alt="" width={'64px'} height={'64px'} />
                                        </a>
                                    )) : <p>Loading...</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact