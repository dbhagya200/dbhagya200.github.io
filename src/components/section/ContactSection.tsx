import React, { useState } from 'react';
import { FaMap, FaShareAlt, FaEnvelope, FaPhone, FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmit] = useState(false);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);

      const subject = encodeURIComponent("New message from portfolio");
      const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  );

  window.location.href = `mailto:dilinibhagya53@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: FaMap,
      title: 'My Address',
      content: 'No 18, Anula mawatha, Pandulagama, Anuradhapura, Sri Lanka'
    },
    {
      icon: FaShareAlt,
      title: 'Social Profiles',
      isSocial: true
    },
    {
      icon: FaEnvelope,
      title: 'Email Me',
      content: 'dilinibhagya53@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Call Me',
      content: '+94 74 099 6275 /+94 70 140 1381'
    }
  ];

  const socialLinks = [
    { href: 'https://x.com/bhagya_dil14146', icon: FaTwitter, name: 'Twitter' },
    { href: 'https://www.facebook.com/sanduni.bhagya.904', icon: FaFacebook, name: 'Facebook' },
    { href: 'https://github.com/dbhagya200', icon: FaGithub, name: 'GitHub' },
    { href: 'https://www.linkedin.com/in/dilini-bhagya-warnekulasooriya/', icon: FaLinkedin, name: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 bg-black/90 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-m uppercase tracking-wider text-gray-400 mb-2">Contact</h2>
          <div className="w-20 h-px bg-green-400 inline-block mb-4"></div>
          <p className="text-3xl font-bold text-white uppercase">Contact Me</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="bg-white/8 rounded-lg p-6 info-box">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center text-white text-xl mr-4 flex-shrink-0">
                    <IconComponent />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white/50 mb-2">{info.title}</h3>
                    {info.isSocial ? (
                      <div className="flex gap-3 social-links">
                        {socialLinks.map((social, idx) => {
                          const SocialIcon = social.icon;
                          return (
                            <a
                              key={idx}
                              href={social.href}
                              className="text-white/70 hover:text-green-500 transition-colors text-2xl"
                              aria-label={social.name}
                            >
                              <SocialIcon />
                            </a>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-white">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white/8 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-white/8 border-0 text-white px-4 py-3 rounded placeholder-gray-400 focus:bg-white/11 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full bg-white/8 border-0 text-white px-4 py-3 rounded placeholder-gray-400 focus:bg-white/11 transition-colors"
              />
            </div>
          </div>
          {/* <div className="mb-6">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full bg-white/8 border-0 text-white px-4 py-3 rounded placeholder-gray-400 focus:bg-white/11 transition-colors"
            />
          </div> */}
          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Message"
              required
              className="w-full bg-white/8 border-0 text-white px-4 py-3 rounded placeholder-gray-400 focus:bg-white/11 transition-colors resize-none"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={`bg-green-600 text-white px-8 py-3 rounded hover:bg-green-800 transition-colors clearfix ${isSubmit ? 'reload' : ''}`}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;