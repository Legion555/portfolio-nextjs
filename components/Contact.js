import {useState} from 'react'
import emailjs from 'emailjs-com';
//icons
import { AiFillLinkedin } from 'react-icons/ai';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
    const [status, setStatus] = useState('Send message')


        function sendEmail(e) {
            e.preventDefault();

            setStatus('Sending...')
            emailjs.sendForm('service_akf9odd', 'template_4fyahrm', e.target, 'user_OtuZx1LoSqVcMymMnCqR8')
            .then((result) => {
                setStatus('Successful')
            }, (error) => {
                console.log(error.text);
            });
          }

    return (
        <div className="contact w-full min-h-screen lg:flex lg:justify-center lg:items-center pt-16" id="contact">
            <div className="text-gray-200 px-4 py-8">
                <h1 className="text-6xl">Contact me</h1>
                <div className="w-full h-0.5 my-1 bg-gray-300" />
                <p className="mb-12">I want to hear from you.</p>

                <div className="flex items-center mb-16">
                    <MdEmail className="mr-4 text-2xl" />
                    <p className="text-xl">joshlausberg555@gmail.com</p>
                </div>

                <div className="flex justify-center">
                    <a href="mailto:joshlausberg555@gmail.com" target="_blank">
                        <MdEmail className="mr-4 p-2 text-6xl rounded-3xl hover:bg-gray-200 hover:text-blue-800" /></a>
                    <a href="https://github.com/Legion555" target="_blank">
                        <FaGithub className="mr-4 p-2 text-6xl rounded-3xl hover:bg-gray-200 hover:text-blue-800" /></a>
                    <a href="https://www.linkedin.com/in/joshualausberg" target="_blank">
                        <AiFillLinkedin className="mr-4 p-2 text-6xl rounded-3xl hover:bg-gray-200 hover:text-blue-800" /></a>
                </div>
            </div>
            <form className="w-full lg:w-6/12 lg:ml-12 xl:w-4/12 p-10 lg:rounded-xl shadow bg-gray-50" onSubmit={sendEmail}>
                <label className="font-bold">Your name</label>
                <input className="contact_input w-full mb-8 px-2 py-4 outline-none rounded-xl"
                    type="text" name="from_name" />
                <label className="font-bold">Your email</label>
                <input className="contact_input w-full mb-8 px-2 py-4 outline-none rounded-xl"
                    type="email" name="from_email" />
                <label className="font-bold">Message</label>
                <textarea className="contact_input w-full mb-8 px-2 py-2 outline-none rounded-xl bg-gray-100" name="message" />
                <input className="p-4 rounded bg-blue-800 text-white hover:bg-blue-600" type="submit" value={status} />
            </form>
        </div>
    )
}