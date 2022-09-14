import React from 'react'
import Link from 'next/link'
import OwnImage from '../helper/Image'

const custom404 = () => {
    return (
        <div className='h-full font-outfit mt-20'>
            <div className='layout-container px-10 md:px-10 '>
                <div className='flex flex-wrap'>
                    <div className='self-center relative'>
                        <OwnImage src="/assets/laptop.svg" alt="" className='w-[100%] h-[100%] z-[10] relative image' />
                        <div className='z-[0] absolute w-[80%] h-[80%] top-0 left-0 pink__gradient' />
                        <div className='z-[0] absolute w-[80%] h-[80%] -right-20 -bottom-20  blue__gradient ' />
                    </div>
                    <div className='ml-10 self-center mt-5 lg:mt-0'>
                        <h1 className='text-white '>Woops....</h1>
                        <p className='mb-4'>It looks like you are lost in space</p>
                        <Link href={'/'} >
                            <button className='btn btn-sm'>Go back to home</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default custom404