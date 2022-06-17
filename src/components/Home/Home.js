import React, { useEffect } from 'react';
import Transition from '../../Transition';
import './Home.scss'
import gsap from 'gsap'
import { useRef } from 'react';
import Contact from '../Contact/Contact';

const Home = () => {
    const home = gsap.timeline();
    const homeh1 = useRef(null);
    const homeimg = useRef(null);
    useEffect(() => {
        home.from(homeh1.current, {
            duration: .6,
            skewX: 10,
            x: -100,
            opacity: 0
        }, "-=3.5")
        home.from(homeimg.current, {
            duration: .5,
            y: 200,
            opacity: 0
        }, "-=3")
    }, [])
    return (
        <div>
            <Transition timeline={home} />
            <div className="container-home">
                <div className="leftside ">
                    <h2 ref={homeh1}> &mdash;Hello, I'm <br />
                        <span>Mohammad Foysal</span></h2>
                    <h6>&lt;&gt; Web Developer &lt;/&gt;</h6>
                    <button>Download My Resume</button>
                </div>
                <div className="rightside">
                    <div ref={homeimg} className="myimg">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;