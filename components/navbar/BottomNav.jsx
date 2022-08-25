import React from 'react'
import { GetNavbar } from '../../services/services'

const BottomNav = () => {
    const response = GetNavbar()
    return (
        <div className="btm-nav font-outfit z-[99] rounded-tl-3xl rounded-tr-3xl  backdrop-blur-md backdrop-opacity-60 border-solid border-[1px] border-cyan-500 border-b-0 drop-shadow-md ">
            {response ? response.map((data, index) => (
                <button key={index} className="text-[24px]">
                    {data.attributes.icon}
                </button>
            )) : 'Loading..'}
        </div>
    )
}

export default BottomNav