'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { FaMailchimp } from 'react-icons/fa6';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(result.message);
        form.reset();
      } else {
        toast.error(result.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-4xl mx-auto pt-20 text-center">
        <button
          type='button'
          className='mx-auto flex items-center gap-2 px-3 py-1 mb-5 shadow-md rounded-full bg-pink-200 text-pink-700'
        >
          <FaMailchimp /> Contact
        </button>
        <h2 
        className="text-3xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text"
        style={{
          backgroundImage: 'linear-gradient(to right, #0a0a21, blue)'
        }}
        >Get in Touch</h2>
        <p className="mb-10 text-blue-900 text-lg">Have questions or need support? We’re just a message away.</p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <motion.a
            href="tel:+2347035512244"
            className="flex items-center gap-3 bg-[#c9d0de] text-blue-700 px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Phone />
            +234 703 551 2244
          </motion.a>
        </div>
        <div className='mt-5'>
          <h3 className='text-center text-blue-900 text-xl underline'>Or</h3>
          <form onSubmit={handleSubmit} className='bg-[#c9d0de] text-left p-5 mt-5 mx-auto max-w-[600px] rounded-md shadow-lg'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              <div>
                <label htmlFor="name" className='inline-block text-blue-800 text-sm'>Name</label>
                <input 
                type="text" 
                name='name'
                id='name'
                placeholder='Akin Lewis'
                className='w-full outline-0 bg-[#f4fcfe] border border-blue-500 rounded-md px-3 py-2 mb-3 placeholder:text-blue-500 text-blue-800' 
                />
              </div>
              <div>
                <label htmlFor="email" className='inline-block text-blue-800 text-sm'>Email</label>
                <input 
                type="email" 
                name='email'
                id='email'
                placeholder='akinlewis@mail.com'
                className='w-full outline-0 bg-[#f4fcfe] border border-blue-500 rounded-md px-3 py-2 mb-3 placeholder:text-blue-500 text-blue-800' 
                />
              </div>
            </div>
            <label htmlFor="message" className='inline-block text-blue-800 text-sm'>Message</label>
            <textarea 
            name="message" 
            id="message" 
            rows={5}
            placeholder='Pls, put your message...'
            className='w-full outline-0 bg-[#f4fcfe] border border-blue-500 rounded-md px-3 py-2 mb-5 placeholder:text-blue-500 text-blue-800'
            ></textarea>
            <button 
            type='submit' 
            className='w-full cursor-pointer py-2 bg-gradient-to-r from-blue-700 to-blue-950 text-white rounded-md hover:from-blue-950 hover:to-blue-700'
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
