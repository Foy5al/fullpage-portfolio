import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Iframe from 'react-iframe';
import Transition from '../../Transition';
import './contact.scss'

const Contact = () => {
    const contact = gsap.timeline();
    const contacth1 = useRef(null);
    const contactimg = useRef(null);

    const iframe = `<iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

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
            <h1 ref={contacth1}>Contact</h1>

            <div className='contact-container'>

                <div ref={contactimg} className="contact-info">
                    <div class="screen">
                        <div class="screen-header">
                            <div class="screen-header-left">
                                <div class="screen-header-button close"></div>
                                <div class="screen-header-button maximize"></div>
                                <div class="screen-header-button minimize"></div>
                            </div>
                            <div class="screen-header-right">
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class="app-title">
                                    <span>Get In</span>
                                    <span>Touch</span>
                                </div>
                                <div class="app-contact">CONTACT INFO : <a href="tel:+8801680386886">+8801680386886</a></div>
                            </div>
                            <div class="screen-body-item">
                                <div class="app-form">
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="NAME" />
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="EMAIL" />
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="CONTACT NO" />
                                    </div>
                                    <div class="app-form-group message">
                                        <textarea class="app-form-control" placeholder="MESSAGE" />
                                    </div>
                                    <div class="app-form-group buttons">
                                        <button class="app-form-button">CANCEL</button>
                                        <button class="app-form-button">SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="location-info">
                    <Iframe className='iframe' url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.21848065130825!2d90.40936816636717!3d23.76535673587572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77e592e3933%3A0x589a1c45ec447de2!2sRHD%20Quarter!5e0!3m2!1sen!2sbd!4v1655946470229!5m2!1sen!2sbd'
                    />
                    <span><a href="https://goo.gl/maps/CHLExUbsBJ2Zj4jH9">Get Direction</a></span>
                </div>
            </div>

        </div>
    );
};

export default Contact;