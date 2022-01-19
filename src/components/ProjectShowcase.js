import React, { useState, useEffect } from 'react'
import style from '../css-modules/ProjectScStyle.module.css'
import ProjectCard from './ProjectCard'

export default function ProjectShowcase() {
    const [projects, setProjects] = useState([{
        "id": 1,
        "title": "Auto Route Controller Express JS",
        "description": "This is a library for ExpressJS to add dynamic routing based on your controller. Can adapt to any types of architecture, as long as it is modular. Can be used in non-modular architecture with slight changes",
        "link": "https://github.com/ginkokuryuu/auto-route-controller",
        "technology": "Javascript"
    },
    {
        "id": 2,
        "title": "VR Eco Sky Car",
        "description": "Driving simulation using Virtual Reality. Using OVR library so it can be used in various Head Mounted Display. Controlled by steering wheel to create immersive experience. Created using Unity Game Engine",
        "link": "https://kumparan.com/beritaanaksurabaya/wujudkan-pembelajaran-canggih-its-resmikan-lab-virtual-reality-1sEpsm2D2jN/full",
        "technology": "C#, OpenVR SDK"
    }])

    useEffect(() => {
        const projectData = require('../datas/ProjectsData.json')
        setProjects(projectData)
    }, [])

    return (
        <div className={style.projectBody}>
            <h1 className={style.title}>Projects Showcase</h1>
            {projects.map(project => {
                return <ProjectCard key={project.id} project={project}/>
            })}
        </div>
    )
}
