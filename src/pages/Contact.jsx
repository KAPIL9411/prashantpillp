import React from 'react';
import '../styles/contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-form-wrapper">
                    <h2 className="form-title">Send Us a Message</h2>
                    <p className="form-intro">Have a question or a project inquiry? Fill out the form below, and our team will get back to you shortly.</p>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="file-upload">Attach a File (Optional)</label>
                            <input type="file" id="file-upload" name="file-upload" />
                        </div>
                        <button type="submit" className="submit-btn">Submit Inquiry</button>
                    </form>
                </div>

                <div className="contact-info-wrapper">
                    <h2 className="info-title">Contact Information</h2>
                    <div className="info-block">
                        <FaMapMarkerAlt className="info-icon" />
                        <div>
                            <h4>Our Office</h4>
                            <p>B-72, MIDC Anand Nagar, Ambernath (E), Thane, Maharashtra - 421506</p>
                        </div>
                    </div>
                    <div className="info-block">
                        <FaPhone className="info-icon" />
                        <div>
                            <h4>Phone</h4>
                            <p>+91 9623 368 579</p>
                            <p>+91 8698 475 053</p>
                        </div>
                    </div>
                    <div className="info-block">
                        <FaEnvelope className="info-icon" />
                        <div>
                            <h4>Email</h4>
                            <p>info@ppillp.com</p>
                        </div>
                    </div>
                    <div className="map-wrapper">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.203306424034!2d73.1954623752084!3d19.18635398204043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7839f7a7775d1%3A0x495b6479a9134c69!2sPrashant%20Plastic%20Industries%20LLP!5e0!3m2!1sen!2sin!4v1722529890065!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map of PPILLP Office"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
