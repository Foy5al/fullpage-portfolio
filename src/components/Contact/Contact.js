import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Iframe from 'react-iframe';
import Transition from '../../Transition';
import './contact.scss';
import emailjs from '@emailjs/browser';
import { BsFacebook, BsGithub, BsLinkedin, BsWhatsapp, BsTelegram } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

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
    }, []);

    const sendEmail = e => {
        e.preventDefault();
        toast.info("Sending Mail")
        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_PROVIDER}`, `${process.env.REACT_APP_TEMPLATE_PROVIDER}`, form.current, `${process.env.REACT_APP_USER}`)
            .then((result) => {
                toast.success("Mail sent", result.text, "!");
            }, (error) => {
                console.log(error.text);
                toast.error(error.text)
            });
        form.current.reset();
    }
    return (
        <div>
            <Transition timeline={contact} />
            <h1 id='contact-heading' ref={contacth1}>Contact</h1>

            <div className='contact-container'>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />

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
                                <div className="app-social-media">

                                    <NavLink to={{ pathname: 'https://github.com/Foy5al' }} target="_blank" rel="noopener noreferrer"><BsGithub /></NavLink>

                                    <NavLink to={{ pathname: 'https://www.facebook.com/iamfoysal.h' }} target="_blank" rel="noopener noreferrer"><BsFacebook /></NavLink>

                                    <NavLink to={{ pathname: 'https://www.linkedin.com/in/md-foysal-h/' }} target="_blank" rel="noopener noreferrer"><BsLinkedin /></NavLink>

                                    <NavLink to={{ pathname: `https://web.whatsapp.com/${process.env.REACT_APP_WHATSAPP_LINK}` }} target="_blank" rel="noopener noreferrer"><BsWhatsapp /></NavLink>

                                    <NavLink to={{ pathname: 'https://t.me/Md_Foysal' }} target="_blank" rel="noopener noreferrer"><BsTelegram /></NavLink>

                                </div>
                                <div className="app-contact">Call : <a href="tel:+8801680386886">+8801680386886</a></div>
                            </div>
                            <div className="screen-body-item">
                                <form ref={form} className="app-form" onSubmit={sendEmail}>

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

                <div ref={contactimg} className="location-info">
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

                            <div className="screen-body-item">
                                <div className="">
                                    <Iframe className='iframe' url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.21848065130825!2d90.40936816636717!3d23.76535673587572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77e592e3933%3A0x589a1c45ec447de2!2sRHD%20Quarter!5e0!3m2!1sen!2sbd!4v1655946470229!5m2!1sen!2sbd'
                                    />
                                    <span><a href="https://goo.gl/maps/CHLExUbsBJ2Zj4jH9">Get Direction</a></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Contact;