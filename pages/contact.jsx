import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="contact-img">
                    <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                    <div className="title">
                        <h2>Contact With Us:-</h2>
                    </div>
                </div>
                <div className="contact-detail">
                    <div className="contact-detail-title">
                        <h2>Contact Us:</h2>
                    </div>

                    <div className="contact-detail-content">
                        <div className="content-item">
                            <i className="fas fa-phone-alt"></i>
                            <h5>+91 9821244410</h5>
                        </div>
                        <div className="content-item">
                            <i className="fas fa-envelope"></i>
                            <h5>info@amanacoustic.in</h5>
                        </div>
                        <div className="content-item">
                            <i className="fas fa-location-arrow"></i>
                            <h5>Office No. 16-B, First Floor,
                                The Chamber Plot No. 89-A & B,
                                Opp. NKGSB Bank, Near Tulsi Vihar Hotel,
                                Sector No.1, Charkop, Kandivali (W), Mumbai-400067, India</h5>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <div className="fcf-body">
                        <div id="fcf-form">
                            <h3 className="fcf-h3">Contact us</h3>
                            <form
                                id="fcf-form-id"
                                className="fcf-form-className"
                                method="post"
                                action="mailto:havanistan@gmail.com"
                            >
                                <div className="fcf-form-group">
                                    <label htmlFor="Name" className="fcf-label">
                                        Your name
                                    </label>
                                    <div className="fcf-input-group">
                                        <input
                                            type="text"
                                            id="Name"
                                            name="Name"
                                            className="fcf-form-control"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="fcf-form-group">
                                    <label htmlFor="Email" className="fcf-label">
                                        Your email address
                                    </label>
                                    <div className="fcf-input-group">
                                        <input
                                            type="email"
                                            id="Email"
                                            name="Email"
                                            className="fcf-form-control"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="fcf-form-group">
                                    <label htmlFor="Message" className="fcf-label">
                                        Your message
                                    </label>
                                    <div className="fcf-input-group">
                                        <textarea
                                            id="Message"
                                            name="Message"
                                            className="fcf-form-control"
                                            rows={6}
                                            maxLength={3000}
                                            required
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="fcf-form-group">
                                    <button
                                        type="submit"
                                        id="fcf-button"
                                        className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block"
                                    >
                                        Send Message
                                    </button>
                                </div>
                                
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact
