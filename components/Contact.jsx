import React, { useRef } from "react";
import contact from "../public/assets/contact.jpg";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {
  

  // Email Form
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.SERVICE_KEY, process.env.TEMPLATE_KEY, form.current, process.env.PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      Swal.fire(
        'Thanks for reaching out😍😍',
        'Click the button below to exit',
        'success'
      )
      document.getElementById("create-course-form").reset();
    }


    return (
      <div id="contact" className="w-full lg:h-screen">
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
          <p className="text-xl tracking-widest uppercase text-[#5651e5] text-center font-semibold">
            Contact
          </p>
          <h2 className="py-4 text-center">Get In Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div>
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={contact}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="py-2">Elijah Aremu</h2>
                  <p>Front-End Developer</p>
                  <p className="py-4">
                    I am available for freelance or full-time positions. Contact
                    me and lets talk
                  </p>
                </div>
                <div>
                  <p className="uppercase">CONNECT WITH ME</p>
                  <div className="flex items-center justify-between py-4">
                    <Link href='https://www.linkedin.com/in/elijah-aremu-445806151/'>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                    </Link>
                    <Link href='https://github.com/babyKokoDev'>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </Link>
                    <Link href='mailto:aremuelija@gmail.com'>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail />
                      </div>
                    </Link>
                    <Link href='https://twitter.com/Adebay0nle'>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaTwitter />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}

            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form ref={form} onSubmit={sendEmail} id="create-course-form">
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input name="user_name" className="border-2 rounded-lg p-3 flex border-gray-300" type="text" required />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Phone Number</label>
                      <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" required/>
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input name="user_email" className="border-2 rounded-lg p-3 flex border-gray-300" type="email" required />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" required />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea name="message" className="border-2 rounded-lg p-3 border-gray-300" id="" cols="30" rows="10" required></textarea>
                  </div>
                  <input type="submit" value='Send Message' className="w-full p-4 text-gray-100 mt- shadow-xl shadow-gray-400 rounded-lg uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] cursor-pointer" />
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-12">
            <Link href="/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp size={30} className="m-auto text-[#5651e5] animate-bounce hover:animate-none" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  export default Contact;
