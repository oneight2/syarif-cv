import parse from 'html-react-parser'
import React from 'react'
import OwnImage from '../../helper/Image'

const Card = ({ index, title, description, yearProject, privateProject, link, typeProject, picture }) => {
    const ROOT_API = process.env.NEXT_PUBLIC_API
    return (
        <>
            <label htmlFor={`modalProject-${index}`} className="button modal-button w-[47%] h-[150px] md:w-52 lg:w-64">
                <div className="card w-[100%] h-[150px] md:w-52 lg:w-64 bg-base-100 shadow-xl image-full font-outfit hover:cursor-pointer hover:drop-shadow-sm transition ease-in-out  hover:-translate-y-1 hover:scale-110 button modal-button">
                    <figure><OwnImage src={ROOT_API + picture} alt="Shoes" layout='fill' /></figure>
                    <div className="card-body group-hover:text-white p-[20px]">
                        <span className={`badge ${typeProject === 'self project' ? 'badge-secondary' : 'badge-primary'}  text-[9px]`}>{typeProject}</span>
                        <h3 className="card-title mb-0 text-[11pt] md:text-[14pt] lg:text-[15pt] leading-5 lg:leading-7 font-bold m-0">{title}</h3>
                        <p className='text-[11px] leading-relaxed  m-0'>{parse(description)}</p>
                    </div>
                </div>
            </label>
            {/* <ModalProject /> */}
            <input type="checkbox" id={`modalProject-${index}`} className="modal-toggle" />
            <div className="modal backdrop-filter backdrop-blur-sm bg-opacity-30">
                <div className="modal-box relative font-outfit">
                    <OwnImage src={ROOT_API + picture} alt="Shoes" className='rounded-2xl image' />
                    <label htmlFor={`modalProject-${index}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="mt-5 font-black text-gradient">{title}</h3>
                    <p className="mt-4">{parse(description)}</p>
                    <div className='flex gap-3 mt-3'>
                        <span className="badge badge-accent text-[7pt]">{yearProject.slice(-10, -6)}</span>
                        <span className={`badge ${typeProject === 'self project' ? 'badge-secondary' : 'badge-primary'} text-[7pt]`}>{typeProject}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card