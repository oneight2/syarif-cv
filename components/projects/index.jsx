import React, { useState, useEffect } from 'react'
import Card from './Card'
import { GetProjects } from '../../services/services'
import useSWRInfinite from "swr/infinite";


const Projects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    // const [totalPage, setTotalPage] = useState(0);
    const ROOT_API = process.env.NEXT_PUBLIC_API;
    const fetcher = (url) => fetch(url).then((res) => res.json());
    // const response = GetProjects(5)

    const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
        (index) =>
            `${ROOT_API}/api/projects?sort=year_project%3Adesc&populate=picture&pagination%5BpageSize%5D=5&pagination%5Bpage%5D=${index + 1
            }`,
        fetcher
    );

    console.log("data", data)
    const response = data ? [].concat(...data) : [];
    const totalPage = data?.[0]?.meta.pagination.pageCount


    return (
        <div className='flex flex-wrap px-4'>
            <h1 className='text-white font-black font-outfit'>My Projects</h1>
            <div className='flex w-full self-center mt-10 flex-wrap gap-2 lg:gap-5 justify-start items-center'>
                {response !== undefined && (
                    response.map((row, index) => (
                        row.data.map((subRow, subIndex) => (
                            <Card key={subRow.id} index={subRow.id} title={subRow.attributes.title} description={subRow.attributes.description} yearProject={subRow.attributes.year_project} privateProject={subRow.attributes.privateProject} link={subRow.attributes.link} typeProject={subRow.attributes.type_project} picture={subRow.attributes.picture.data.attributes.formats.medium.url} />
                        ))
                    ))
                )}
                {
                    currentPage !== totalPage && (
                        <button className='btn btn-sm font-outfit' onClick={() => { setSize(size + 1); setCurrentPage(currentPage + 1) }} >View all 👉</button>
                    )
                }

            </div>
        </div>
    )
}

export default Projects