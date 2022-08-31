import React from 'react'
import { GetNavbar } from '../../services/services'

const BottomNav = () => {
    const response = GetNavbar()
    return (
        <div className="btm-nav font-outfit z-[99] rounded-tl-3xl rounded-tr-3xl border-solid border-[1px] border-cyan-500 border-b-0  backdrop-filter backdrop-blur-lg bg-opacity-30">
            {response ? response.map((data, index) => (
                <button key={index} className="text-[24px]">
                    {data.attributes.icon}
                </button>
            )) : <p>Loading...</p>}
        </div>
    )
}

export default BottomNav