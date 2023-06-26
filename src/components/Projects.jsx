import React from 'react';
import { projectsList } from '../constants';

const Projects = () => (
    <div className="">
        <div className="project__container container grid">
            {projectsList.map((project) => {
                return (
                    <div className="project__card" key={project.id}>
                        <img src={project.image} alt="" className="project__image" />

                        <h3 className="project__title">
                            {project.name}
                        </h3>

                        <a href={project.link} className="project__button">
                            Demo <i className="bx bx-right-arrow-alt project__button-icon"></i>
                        </a>
                    </div>
                )
            })}
        </div>
    </div>
)

export default Projects
