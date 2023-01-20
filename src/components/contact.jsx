import React, { Component } from 'react';
import "./contact.css";

class ContactMe extends Component {
    // state = {}
    render() {

        return (
            <div className="contact-section">
                <div className="contact-information">
                    <h2>CONTACT</h2>
                    <label htmlFor="email">Email : </label>
                    <span id='email'>oussama.arouch@gmail.com</span>
                    <label htmlFor="email">Linkdin : </label>
                    <a href="https://www.linkedin.com/in/oussama-arouch/">
                        <img src="./linkedin.png" alt="Linkdin Icon" />
                    </a>
                </div>

                <br />
                <div className="resume">
                    <h2>RESUME</h2>
                    <span id='tip'>!!! Click the cat face to download the resume !!!</span>
                    <a href="public\Curriculum_JV_Oussama_Arouch.pdf">
                        <img src="./catFace.png" alt="Cat Face" />
                    </a>
                </div>

                <br />

                <div className="contact-me">
                    <h2>FEEDBACK</h2>

                    <form action="" method='POST' className='form'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' placeholder='Name...' className='name' />
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' placeholder='Email...' className='email' />
                        <label htmlFor="comment">Comment</label>
                        <textarea name="comment" id="comment" cols="30" rows="10" className='comment' placeholder='Tap your text here...' ></textarea>
                        <input type="submit" name='submit' value='Submit' className='submit' />
                    </form>
                </div>

                <div className="contact-me">
                    <h2>PRINT FEEDBACK</h2>

                    <form action="" method='POST' className='form'>
                        <input type="submit" name='get_feedback' value='Get Feedbacks' className='submit' />
                    </form>
                    <div className="retrieve_feedback">

                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>

        );
    }
}

export default ContactMe;

// value={email} onChange={(e) => setEmail(e.target.value)}
// value={name} onChange={(e) => setName(e.target.value)}