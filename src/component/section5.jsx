import React from 'react'
import './section5.css'
function Contact(){
    return(
        <>
            <section id='Contact'>
                <section className='Contact1'>
                    <form>
                        <h2>Contact Form</h2>
                        <div className="input-box">
                            <label>Full Name </label>
                            <input type="text" className="field" placeholder='Enter your name' required />
                        </div>
                        <div className="input-box">
                            <label>Email Address </label>
                            <input type="email" className="field" placeholder='Enter your email' required />
                        </div>
                        <div className="input-box">
                            <label>Your message </label>
                            <textarea name="" id=""  className="field mess" placeholder='Enter your message' required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </section>
            </section>
        </>
    );
}
export default Contact;