import React from 'react'
import Card from './card'
import { GetProjects } from '../../services/services'
const Projects = () => {
    const response = GetProjects(5, 'desc')
    return (
        <div className='flex flex-wrap px-4'>
            <h1 className='text-white font-black font-outfit'>My Projects</h1>
            <div className='flex w-full self-center mt-10 flex-wrap gap-3 lg:gap-5 justify-start'>
                {response && (
                    response.map((data, index) => (
                        <Card key={index} title={data.attributes.title} description={data.attributes.description} yearProject={data.attributes.year_project} privateProject={data.attributes.privateProject} link={data.attributes.link} typeProject={data.attributes.type_project} picture={data.attributes.picture.data.attributes.formats.medium.url} />
                    ))
                )}

            </div>
        </div>
    )
}

export default Projects