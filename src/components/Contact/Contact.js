import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Transition from '../../Transition';
import './contact.scss'

const Contact = () => {
    const contact = gsap.timeline();
    const contacth1 = useRef(null);
    const contactimg = useRef(null);

    useEffect(() => {
        contact.from(contacth1.current, {
            duration: .6,
            skewX: 10,
            x: -100,
            opacity: 0
        }, "-=3.5")
        contact.from(contactimg.current, {
            duration: .5,
            y: -200,
            opacity: 0
        }, "-=3")
    }, [])
    return (
        <div>
            <Transition timeline={contact} />
            <div className="contact-image contact-overlay" ref={contactimg}> </div>

            <div className="contact-container">
                <h1 ref={contacth1}>Under Development</h1>
            </div>
        </div>
    );
};

export default Contact;