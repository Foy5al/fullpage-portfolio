import React, { useEffect } from 'react';
import './Transition.scss'
import { Power4 } from 'gsap'
import { useRef } from 'react';

const Transition = ({ timeline }) => {
    const trans = useRef(null);
    useEffect(() => {
        timeline.to(trans.current, {
            duration: 4,
            x: 2500,
            ease: Power4.easeOut
        })
    }, [])
    return (
        <div>
            <div className="transition-effect" ref={trans}>

            </div>
        </div>
    );
};

export default Transition;