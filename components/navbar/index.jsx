import Link from 'next/link';
import React from 'react'
import { GetNavbar } from '../../services/services'

const Navbar = () => {
    const response = GetNavbar();
    return (
        <div className="navbar sticky top-0 font-outfit backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">oneight2</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    {response !== null ? response.map((data, index) => (
                        <li key={index} className="tooltip tooltip-bottom" data-tip={data.attributes.tooltip}><Link href={data.attributes.url} ><p className="text-[24px]">{data.attributes.icon}</p></Link></li>
                    )) : 'Loading...'}
                </ul>
            </div>
        </div>
    )
}

export default Navbar