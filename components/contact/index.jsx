import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-wrap px-4'>
            <h1 className='text-white font-black font-outfit'>Find Me</h1>
            <div className='flex w-full self-center mt-10 mx-auto'>
                <div className="mockup-phone w-[320px] hover:drop-shadow-md transition ease-in-out delay-150 ">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1 max-w-[290px] relative">
                            <img src="./assets/wallpaper.jpg" className='bg-cover h-[100%] z-[0] absolute' alt="" />
                            <div className='flex flex-wrap gap-4'>
                                <a href="" className='tooltip drop-shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' data-tip="Follow My Instagram">
                                    <img src="./assets/instagram.png" className='w-[64px] h-[64px] z-[10]' alt="" />
                                </a>
                                <a href="" className='tooltip drop-shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' data-tip="Let's connect in LinkedIn">
                                    <img src="./assets/linkedin.svg" className='w-[64px] h-[64px] z-[10]' alt="" />
                                </a>
                                <a href="" className='tooltip drop-shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' data-tip="Follow My Github">
                                    <img src="./assets/github.svg" className='w-[64px] h-[64px] z-[10]' alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact