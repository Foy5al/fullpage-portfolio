import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Particles from 'react-tsparticles';
import Transition from '../../Transition';
import './Projects.scss';
import { loadFull } from "tsparticles";
import { NavLink } from 'react-router-dom';


const Projects = () => {
    const project = gsap.timeline();
    const projecth1 = useRef(null);
    const projectimg = useRef(null);

    const particlesInit = async (main) => {
        // console.log(main);
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        // console.log(container);
    };

    useEffect(() => {
        project.from(projecth1.current, {
            duration: .6,
            skewX: 10,
            x: -100,
            opacity: 0
        }, "-=3.5")
        project.from(projectimg.current, {
            duration: .5,
            y: -200,
            opacity: 0
        }, "-=3")
    }, [])
    return (
        <>
            <Transition timeline={project} />

            <div id='project'>


                {/* <div className="project-image project-overlay" > */}
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#222831",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#F2F2F2",
                            },

                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />


                <h1 ref={projecth1}>Projects</h1>
                <div ref={projectimg} className="projects-container">

                    <div className="project-container">

                        <div className='box box1'></div>
                        <h2>Name: Food Express</h2>
                        <div className='techbox-container'>
                            <p>Technology:</p>

                            <span className='techbox'>React</span>
                            <span className='techbox'>Bootstrap</span>
                            <span className='techbox'>React Router</span>
                            <span className='techbox'>Firebase</span>
                            <span className='techbox'>Mongo DB</span>
                        </div>
                        <div>
                            <NavLink to={{ pathname: 'https://github.com/Foy5al/food-express' }} target="_blank" rel="noopener noreferrer">See Details </NavLink>
                            <a href="https://foodiesexpressbd.web.app/" target="_blank" rel="noopener noreferrer">Live preview</a>
                        </div>
                    </div>
                    <div className="project-container">

                        <div className='box box2'></div>
                        <h2>Name: Health Haven Hospital</h2>
                        <div className='techbox-container'>
                            <p>Technology:</p>

                            <span className='techbox'>React</span>
                            <span className='techbox'>Material Ui</span>
                            <span className='techbox'>React Router</span>
                            <span className='techbox'>Firebase</span>
                        </div>
                        <div>
                            <NavLink to={{ pathname: 'https://github.com/Foy5al/healthcare-service-app' }} target="_blank" rel="noopener noreferrer">See Details </NavLink>
                            <a href="https://healthcare-service-react-app.web.app/" target="_blank" rel="noopener noreferrer">Live preview</a>
                        </div>
                    </div>

                    <div className="project-container">
                        <div className='box box3'></div>
                        <h2>Name: Skill Squid Eudcation</h2>
                        <div className='techbox-container'>
                            <p>Technology:</p>
                            <span className='techbox'>React</span>
                            <span className='techbox'>Tailwind</span>
                            <span className='techbox'>React Router</span>

                        </div>
                        <div>
                            <NavLink to={{ pathname: 'https://github.com/Foy5al/react-skillSquid-education-app' }} target="_blank" rel="noopener noreferrer">See Details </NavLink>
                            <a href="https://react-skillsquid-e-learning.netlify.app/" target="_blank" rel="noopener noreferrer">Live preview</a>
                        </div>

                    </div>

                    <div className="project-container">

                        <div className='box box4'></div>
                        <h2>Name: Weather App</h2>
                        <div className='techbox-container'>
                            <p>Technology:</p>
                            <span className='techbox'>HTML</span>
                            <span className='techbox'>Css</span>
                            <span className='techbox'>JavaScript</span>
                            <span className='techbox'>Weather Api</span>
                        </div>
                        <div>
                            <NavLink to={{ pathname: 'https://github.com/Foy5al/weather-info-checker' }} target="_blank" rel="noopener noreferrer">See Details </NavLink>
                            <a href="https://weather-info-checker.netlify.app/" target="_blank" rel="noopener noreferrer">Live preview</a>
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default Projects;