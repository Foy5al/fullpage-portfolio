import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Iframe from 'react-iframe';
import Transition from '../../Transition';
import './contact.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

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
    }, []);

    const sendEmail = e => {
        e.preventDefault();
        // console.log("form is trigged", form.current, process.env.REACT_APP_SERVICE_PROVIDER);

        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_PROVIDER}`, `${process.env.REACT_APP_TEMPLATE_PROVIDER}`, form.current, `${process.env.REACT_APP_USER}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            <Transition timeline={contact} />
            <h1 id='contact-heading' ref={contacth1}>Contact</h1>

            <div className='contact-container'>

                <div ref={contactimg} className="contact-info">
                    <div className="screen">
                        <div className="screen-header">
                            <div className="screen-header-left">
                                <div className="screen-header-button close"></div>
                                <div className="screen-header-button maximize"></div>
                                <div className="screen-header-button minimize"></div>
                            </div>
                            <div className="screen-header-right">
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div className="screen-body">
                            <div className="screen-body-item left">
                                <div className="app-title">
                                    <span>Get In</span>
                                    <span>Touch</span>
                                </div>
                                <div className="app-contact">CONTACT INFO : <a href="tel:+8801680386886">+8801680386886</a></div>
                            </div>
                            <div className="screen-body-item">
                                <form ref={form} className="app-form" onSubmit={sendEmail}>
                                    {/* <div className="app-form-group">
                                        <input className="app-form-control" placeholder="NAME" />
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="EMAIL" />
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="CONTACT NO" />
                                    </div>
                                    <div className="app-form-group message">
                                        <textarea className="app-form-control" placeholder="MESSAGE" />
                                    </div>
                                    <div className="app-form-group buttons">
                                        <input className="app-form-button" type="submit" value="S E N D" />
                                    </div> */}
                                    <label className='app-form-label' >Name</label>
                                    <input className="app-form-control" required placeholder="NAME" name="user_name" />

                                    <input type="email" required className="app-form-control" placeholder="EMAIL" name="user_email" />

                                    <input type="number" className="app-form-control" placeholder="CONTACT NO" name="contact" />

                                    <textarea className="app-form-control message" placeholder="MESSAGE" name="message" />

                                    <span className="form-button-container">
                                        <input className="app-form-button" type="submit" value="S E N D" />
                                    </span>

                                </form>
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