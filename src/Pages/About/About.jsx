import React from 'react'

const About = () => {
  return (
    <div id="about-section" className="container mx-auto px-1 md:px-0 lg:px-32 py-4 font-figtree w-full">
      <div className="font-bold text-3xl md:text-5xl lg:text-5xl text-[#04263e]">About</div>

      <div className="mt-6 lg:grid grid-cols-2 gap-8">
        <div className="text-gray-700 text-sm md:text-base lg:text-base">
          <p className="mb-3">
            Hi — I’m <strong>Narendiran E</strong>, a results-driven MERN Stack Developer with <strong>2+ years</strong> of experience building scalable, high-performance web applications — primarily for healthcare SaaS.
          </p>

          <p className="mb-3">
            I’ve designed and maintained enterprise-grade platforms like <strong>WWS Business Manager</strong> and <strong>WWS Nexus CRM</strong>, built secure REST & GraphQL APIs, implemented JWT-based authentication, and set up CI/CD deployments on AWS. I focus on performance, security, and reusable frontend components.
          </p>

          <p>
            Key achievements: improved API latency and app performance by <strong>~40%</strong>, delivered over <strong>30 reusable React components</strong>, and implemented role-based access and real-time features such as chat & subscriptions.
          </p>
        </div>

        <div className="text-gray-600">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="font-medium">Contact</div>
            <div className="mt-2 text-sm">
              <div>📍 Tiruvannamalai, Arani, Tamil Nadu</div>
              <div>✉️ <a href="mailto:narendirannaresh396@gmail.com">narendirannaresh396@gmail.com</a></div>
              <div>📞 +91 93847 62499</div>
              <div className="mt-2"><a href="/assets/Narendiran_E_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600">Download Resume</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
