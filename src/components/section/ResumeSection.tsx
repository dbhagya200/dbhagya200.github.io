import React from 'react';
import { Download} from "lucide-react"
import cv from '../../../public/Dilini Bhagya Warnakulasooriya.pdf';


const ResumeSection: React.FC = () => {
  const education = [
    {
      degree: 'Graduate Diploma, Computer Software Engineering',
      period: '2023 - 2025',
      institution: 'IJSE-Institute of Software Engineering',
      description: 'Pursuing a comprehensive program focused on software engineering principles, system design, and modern development practices. The course covers full-stack development, object-oriented programming, database management, software architecture, and project management. Emphasis is placed on practical, industry-oriented learning through real-world projects and teamwork, preparing for professional roles in software development and IT solutions.'
    },
    {
      degree: 'Bachelor of Science (hons) in Computing',
      period: 'Pending',
      institution: 'University of Bolton (UK)',
      description: 'Building a strong technical foundation in software development, systems architecture, and modern IT solutions. Through hands-on coursework and practical projects, developed sharp analytical problem-solving skills and experience with the full software development lifecycle.'
    },
      // {
      //   degree: 'Bachelor of Fine Arts & Graphic Design',
      //   period: '2010 - 2014',
      //   institution: 'Rochester Institute of Technology, Rochester, NY',
      //   description: 'Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila'
      // }
  ];

  const experience = [
    {
      position: 'Student of Full Stack Developer',
      period: '2023 - 2025',
      company: 'IJSE-Institute of Software Engineering',
      responsibilities: [
        'Learning HTML, CSS, JavaScript, React, React-Native, Node.js, Express, MongoDB, and other web development technologies.',
        'Building projects to apply learned skills and gain practical experience.',
        'Collaborating with peers on group assignments and projects.',
        'Participating in coding challenges and competition to enhance problem-solving skills.',
      ]
    },
    {
      position: 'Intern Software Engineer',
      period: '2026/02 - 2026/08',
      company: 'RedCode Solution',
      responsibilities: [
        'Engineered a PHP Laravel and Vite Smart City management system,boosting municipal operation efficiency.',
        'Developed Expo-based Citizen and Driver mobile apps for real-timegarbage tracking, improving field coordination.',
        'Built a dynamic CV generation web app using React and Next.js, increasing resume creation speed.',
        'Maintained clean component architecture and RESTful APIs, ensuring 99% system uptime across web and mobile platforms.',
      ]
    },
    {
      position: 'Freelance Web Developer',
      period: '2025 - Present',
      company: 'Ceylon Visit Tours',
      responsibilities: [
        'Developed and deployed "Ceylon Visit Tours," a fully responsive travel web app using React and TypeScript.',
        'Streamlined UI and booking flows, increasing client inquiries.',
        'Optimized frontend performance, reducing page load times by 25% across all devices.',
        'Achieved 100% component reusability through clean architecture for a maintainable codebase.',
      ]
    },
    // {
    //   position: 'Graphic design specialist',
    //   period: '2017 - 2018',
    //   company: 'Stepping Stone Advertising, New York, NY',
    //   responsibilities: [
    //     'Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements)',
    //     'Managed up to 5 projects or tasks at a given time while under pressure',
    //     'Recommended and consulted with clients on the most appropriate graphic design',
    //     'Created 4+ design presentations and proposals a month for clients and account managers'
    //   ]
    // }
  ];

    const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = `${cv}`
    link.download = "Dilini_Bhagya's-CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="py-20 bg-black/90 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-m uppercase tracking-wider text-gray-400 mb-2">Resume</h2>
          <div className="w-20 h-px bg-green-400 inline-block mb-4"></div>
          <p className="text-3xl font-bold text-white uppercase">Check My Resume</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

           {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-green-500">
                  <div className="absolute -left-2.5 top-0 w-4 h-4 bg-green-500 rounded-full border-2 border-green-500"></div>
                  <h4 className="text-lg font-semibold text-green-500 mb-2 uppercase">{exp.position}</h4>
                  <h5 className="text-green-500 font-medium mb-2 bg-white/15 px-4 py-1 inline-block rounded">
                    {exp.period}
                  </h5>
                  <p className="text-gray-300 mb-3 italic">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-green-500">
                  <div className="absolute -left-2.5 top-0 w-4 h-4 bg-green-500 rounded-full border-2 border-green-500"></div>
                  <h4 className="text-lg font-semibold text-green-500 mb-2 uppercase">{edu.degree}</h4>
                  <h5 className="text-green-500 font-medium mb-2 bg-white/15 px-4 py-1 inline-block rounded">
                    {edu.period}
                  </h5>
                  <p className="text-gray-300 mb-2 italic">{edu.institution}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

         
        </div>
            <button
                    onClick={handleDownloadCV}
                    className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 rounded-3xl font-medium
                              text-white border border-white/30 
                                backdrop-blur-md 
                                m-5
                              shadow-lg hover:shadow-xl
                              transition-all duration-300 ease-in-out bg-green-800 hover:bg-green-500/90"
                  >
                    <Download size={20} className="animate-bounce-slow" />
                    Get My Resume
                  </button>
      </div>
    </section>
  );
};

export default ResumeSection;