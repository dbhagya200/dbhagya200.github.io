import React from 'react';
import '../../index.css';
import {  FaChevronRight } from 'react-icons/fa';
import img from '../../../public/img/nbg-1.png';
// import { RiStoreLine, RiBarChartBoxLine, RiCalendarTodoLine, RiPaintBrushLine, RiDatabase2Line, RiGradienterLine } from 'react-icons/ri';

const AboutSection: React.FC = () => {
  const personalInfo = [
    { label: 'Birthday', value: '5 February 2000' },
    // { label: 'Website', value: 'www.example.com' },
    { label: 'Phone', value: '+9474 099 6275' },
    { label: 'City', value: 'Anuradhapura,Sri Lanka' },
    // { label: 'Age', value: '3' },
    { label: 'Degree', value: 'Pending' },
    { label: 'Email', value: 'dilinibhagya53@gmail.com' },
    { label: 'Freelance', value: 'Available' },
  ];

  // const skills = [
  //   { name: 'HTML', level: 100 },
  //   { name: 'CSS', level: 90 },
  //   { name: 'JavaScript', level: 75 },
  //   { name: 'PHP', level: 80 },
  //   { name: 'WordPress/CMS', level: 90 },
  //   { name: 'Photoshop', level: 55 },
  // ];

  // const counts = [
  //   { icon: FaSmile, number: '232', label: 'Happy Clients' },
  //   { icon: FaFolder, number: '521', label: 'Projects' },
  //   { icon: FaHeadset, number: '1463', label: 'Hours Of Support' },
  //   { icon: FaAward, number: '24', label: 'Awards' },
  // ];

  // const interests = [
  //   { icon: RiStoreLine, name: 'Lorem Ipsum', color: '#ffbb2c' },
  //   { icon: RiBarChartBoxLine, name: 'Dolor Sitema', color: '#5578ff' },
  //   { icon: RiCalendarTodoLine, name: 'Sed perspiciatis', color: '#e80368' },
  //   { icon: RiPaintBrushLine, name: 'Magni Dolores', color: '#e361ff' },
  //   { icon: RiDatabase2Line, name: 'Nemo Enim', color: '#47aeff' },
  //   { icon: RiGradienterLine, name: 'Eiusmod Tempor', color: '#ffa76e' },
  // ];

  return (
    <section id="about" className="py-20 bg-black/90 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-m uppercase tracking-wider text-gray-400 mb-2">About</h2>
          <div className="w-20 h-px bg-green-400 inline-block mb-4"></div>
          <p className="text-3xl font-bold text-white uppercase">Learn more about me</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <img
              src={img}
              alt="dilini bhagya"
              className="w-full h-120 object-cover rounded-lg"
            />
          </div>
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-green-500 mb-4">Full-Stack Developer</h3>
            <p className="text-gray-300 italic mb-6">
              Hello, I am Dilini Bhagya, pursuing graduation to become a professional software engineer. Permanent residence in Anuradhapura, Sri Lanka. I am passionate about using technology to create innovative solutions to grow businesses and improve people's lives.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <ul className="space-y-4">
                  {personalInfo.slice(0, 4).map((info, index) => (
                    <li key={index} className="flex items-center">
                      <FaChevronRight className="text-green-500 mr-3 text-sm" />
                      <strong className="text-white w-24">{info.label}:</strong>
                      <span className="text-gray-300">{info.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  {personalInfo.slice(4).map((info, index) => (
                    <li key={index} className="flex items-center">
                      <FaChevronRight className="text-green-500 mr-3 text-sm" />
                      <strong className="text-white w-24">{info.label}:</strong>
                      <span className="text-gray-300">{info.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* <p className="text-gray-300">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p> */}
          </div>
        </div>

        {/* Counts */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {counts.map((count, index) => {
            const IconComponent = count.icon;
            return (
              <div key={index} className="bg-white/8 rounded-lg p-8 text-center relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-green-500 text-xl">
                  <IconComponent />
                </div>
                <div className="text-3xl font-bold text-white mt-4">{count.number}</div>
                <div className="text-gray-300">{count.label}</div>
              </div>
            );
          })}
        </div> */}

        {/* Skills */}
        {/* <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white font-medium uppercase">{skill.name}</span>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Interests */}
        {/* <div>
          <h3 className="text-3xl font-bold text-white text-center mb-8">Interests</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interests.map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <div
                  key={index}
                  className="bg-white/8 rounded-lg p-6 flex items-center hover:bg-white/12 transition-colors"
                >
                  <IconComponent 
                    className="text-3xl mr-4"
                    style={{ color: interest.color }}
                  />
                  <h4 className="text-white font-bold">{interest.name}</h4>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;