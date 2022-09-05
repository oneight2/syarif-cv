import React from 'react'
import Image from 'next/image'
import parse from 'html-react-parser'

const Card = ({ title, description, yearProject, privateProject, link, typeProject, picture }) => {
    const ROOT_API = process.env.NEXT_PUBLIC_API
    return (
        <div className="card w-[47%] h-[150px]  lg:w-64 bg-base-100 shadow-xl image-full font-outfit group-hover:text-white hover:cursor-pointer hover:drop-shadow-sm transition ease-in-out  hover:-translate-y-1 hover:scale-110">
            <figure><img src={ROOT_API + picture} alt="Shoes" layout='fill' /></figure>
            <div className="card-body group-hover:text-white p-[20px]">
                <h3 className="card-title mb-0">{title}</h3>
                <p className='text-[11px]'>{parse(description)}</p>
            </div>
        </div>
    )
}

export default Card