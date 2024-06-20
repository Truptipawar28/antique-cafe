// import React from "react";

const ContactUs = (props) => {
    const contact = props.contactUsContent;

    return (
        <>
            <section className="contactus">
                <div className="container">
                    <div className="row gy-5 justify-content-end">
                        <div className="contact_us col-md-6">
                            {contact.map((item) => {
                                return (
                                    <>
                                        <div className="mb-4 contact-content">
                                            <h2>{item.contactUsHeading}</h2>
                                            <p>{item.contactUsContent}</p>
                                            <p className="mb-10 text-lg">
                                                <span className="block mb-2">
                                                    Tel:{" "}
                                                    <a
                                                        href="tel:0100200340"
                                                        className="hover:text-yellow-600 transition"
                                                    >
                                                        010-020-0340
                                                    </a>
                                                </span>
                                                <span className="block">
                                                    Email:{" "}
                                                    <a
                                                        href="mailto:info@company.com"
                                                        className="hover:text-yellow-600 transition"
                                                    >
                                                        info@company.com
                                                    </a>
                                                </span>
                                            </p>{" "}
                                            <div className="contactus-btn">
                                                <a href="#contact" className="map-btn">
                                                    <i className="fa-solid fa-map-location-dot"></i>
                                                    {item.mapBtn}
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                        <div className="contact_us_form col-md-6">
                            <div className="contactus-form">

                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            {/* <input type="text" placeholder="Message.."/> */}
                            <textarea name="" id="" cols="30" rows="5" placeholder="Message.."></textarea>

                            <div className="text-end"><button className="btn">Send it</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
