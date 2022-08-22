import React from 'react'
import Card from './card'

const Projects = () => {
    return (
        <div className='flex flex-wrap px-4'>
            <h1 className='text-white'>My Projects</h1>
            <div className='flex w-full self-center mt-10 flex-wrap gap-3 lg:gap-5 justify-start'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Projects