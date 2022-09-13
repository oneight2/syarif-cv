import React, { useState, useEffect } from 'react'
import Card from './Card'
import { GetProjects } from '../../services/services'

const Projects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const response = GetProjects(5)
    const dataProjects = response?.[0]?.data

    // const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    //     (index) =>
    //         `${ROOT_API}/api/projects?sort=year_project%3Adesc&populate=picture&pagination%5BpageSize%5D=${pageSize}&pagination%5Bpage%5D=${index + 1
    //         }`,
    //     fetcher
    // );

    // const dataProjects = data ? [].concat(...data) : [];


    return (
        <div className='flex flex-wrap px-4'>
            <h1 className='text-white font-black font-outfit'>My Projects</h1>
            <div className='flex w-full self-center mt-10 flex-wrap gap-2 lg:gap-5 justify-start items-center'>
                {dataProjects !== undefined && (
                    dataProjects.map((row, index) => (
                        <Card key={index} index={index} title={row.attributes.title} description={row.attributes.description} yearProject={row.attributes.year_project} privateProject={row.attributes.privateProject} link={row.attributes.link} typeProject={row.attributes.type_project} picture={row.attributes.picture.data.attributes.formats.medium.url} />
                    ))
                )}
                <button className='btn btn-sm font-outfit' onClick={() => setSize(size + 1)} >View all 👉</button>

            </div>
        </div>
    )
}

export default Projects