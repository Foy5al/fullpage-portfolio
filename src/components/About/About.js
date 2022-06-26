import React, { useEffect, useRef } from 'react';
import Transition from '../../Transition';
import './about.scss'
import gsap from 'gsap'

const About = () => {
    const about = gsap.timeline();
    const abouth1 = useRef(null);
    const aboutimg = useRef(null);
    const skilltext = useRef(null);

    useEffect(() => {
        about.from(abouth1.current, {
            duration: .6,
            skewX: 10,
            x: -100,
            opacity: 0
        }, "-=3.5")
        about.from(aboutimg.current, {
            duration: .5,
            x: 200,
            opacity: 0
        }, "-=3")
        about.from(skilltext.current, {
            duration: .7,
            y: -200,
            opacity: 0
        }, "-=3")
    }, []);
    const downloadResume = () => {
        const link = `https://drive.google.com/uc?export=download&id=17NxXqoU7NuBy2slhn-wVES8Ko4-Pv5iG`
        window.location.replace(link);
    }
    return (
        <div>
            <Transition timeline={about} />
            <div className="container-about">
                <div className="leftside about">
                    <h2 ref={abouth1}> &mdash;About Me <br />
                        <span>I'm a Full Stack web developer working from home</span></h2>
                    <p>&lt;&gt; I have two leading passions in my life: one is to create and another is to explore. I love to create websites, and Graphics design and making animation give me a lot of joy. I always try to learn new things and never like to limit myself to a box. I currently looking for an internship with a reputable IT firm that has room for growth. Desire to work as a MERN stack developer and quickly learn new technologies. &lt;/&gt;</p>


                    <button onClick={() => { downloadResume() }} ><span>Download Resume </span></button>
                </div>
                <div ref={aboutimg} className="rightside skill">
                    <h2 ref={abouth1}> &mdash;My Skills <br /></h2>

                    <div className='skill-list'>
                        <ul ref={skilltext}>
                            <li><ul>Languages
                                <li>&rsaquo;&rsaquo; HTML </li>
                                <li>&rsaquo;&rsaquo; CSS</li>
                                <li>&rsaquo;&rsaquo; JavaScript</li>
                            </ul></li>

                            <li><ul>Library / Frameworks
                                <li>&rsaquo;&rsaquo; React </li>
                                <li>&rsaquo;&rsaquo; Material Ui</li>
                                <li>&rsaquo;&rsaquo; Node.js</li>
                                <li>&rsaquo;&rsaquo; Bootstrap</li>
                                <li>&rsaquo;&rsaquo; TailwindCSS</li>
                            </ul></li>
                        </ul>

                        <ul ref={skilltext}>
                            <li><ul>Tools
                                <li>&rsaquo;&rsaquo; Firebase </li>
                                <li>&rsaquo;&rsaquo; Git</li>
                            </ul></li>

                            <li><ul>Graphics
                                <li>&rsaquo;&rsaquo; Graphics </li>
                                <li>&rsaquo;&rsaquo; Photoshop</li>
                                <li>&rsaquo;&rsaquo; Illustrator</li></ul></li>

                            <li><ul>Computer Network
                                <li>&rsaquo;&rsaquo; Mikrotik </li>
                                <li>&rsaquo;&rsaquo; Cisco</li>
                            </ul></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;