import React from 'react'
import Image from 'next/image'

const Card = () => {
    return (
        <div className="card w-[47%] h-[150px]  lg:w-52 bg-base-100 shadow-xl image-full font-outfit group-hover:text-white hover:cursor-pointer hover:drop-shadow-sm transition ease-in-out  hover:-translate-y-1 hover:scale-110">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" layout='fill' /></figure>
            <div className="card-body group-hover:text-white">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    )
}

export default Card