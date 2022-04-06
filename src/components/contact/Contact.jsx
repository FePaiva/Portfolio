import {useState} from 'react'
import './contact.scss'
import emailjs from "emailjs-com";


export default function Contact() {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true);
    emailjs.sendForm('service_8q2luca', 'template_9nqpiss', e.target, 'YpDYsIkEt7x3RErQ6')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
  }
  return (
    <div className='contact' id='contact'>
        <div className="left">
            <img src='assets/shake.svg' alt='' />
        </div>
        <div className="right">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Your Name"
                name="name"
                required
                />
                <input 
                type="text" 
                placeholder="Your Email"
                name="email"
                required
                />
                <input 
                type="text" 
                placeholder="Subject"
                name="subject"
                required
                />
                <textarea 
                placeholder="Message"
                name="message"
                rows="8"
                required
                />
                <button type="submit">
                  Send
                </button>
                {message && <span>Thanks for your message. I will get back to you shortly. </span>}
            </form>
        </div>
    </div>
  )
}
