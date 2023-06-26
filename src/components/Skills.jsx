import React from 'react';
import "../styles/skills.css";
import { skillsList } from '../constants';

const Skills = () => (
    <section className="skills section" id="skills">
        <h2 className="section__title">My Skills</h2>
        {/*<span className="section__subtitle">Web Developer</span>*/}

        <div className="skills__container container grid">
            <div className="skills_content">
                <h3 className="skills__title"></h3>

                <div className="skills__box">
                    <div className="skills__group">
                    {skillsList.map((skill) => (
                        <div className="skills__data" key={skill.id}>
                            <i className={`${skill.icon} skills__icon`}></i>
                            
                            <div>
                                <h3 className="skills__name">{skill.name}</h3>
                                <span className="skills__level">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Skills