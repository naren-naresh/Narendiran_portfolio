const About = () => {
  return (
    <div id="about-section" className="container mx-auto px-1 md:px-0 lg:px-32 py-4 font-figtree w-full">
      <div className="font-bold text-3xl md:text-5xl text-[#04263e]">About</div>

      <div className="mt-6 lg:grid grid-cols-2 gap-8">
        <div className="text-gray-700 text-sm md:text-base">
          <p className="mb-3">
            I’m <strong>Narendiran E</strong>, a MERN Stack Developer with <strong>2+ years</strong> of hands-on experience
            building scalable, secure, and high-performance web applications.
          </p>
          <p className="mb-3">
            My toolkit includes <strong>React.js</strong>, <strong>Redux Toolkit</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, <strong>GraphQL</strong>, and
            <strong> AWS CI/CD</strong>. I focus on clean architecture, reusable components, API design, and measurable improvements in performance and UX.
          </p>
          <p>
            Highlights include <strong>~40% performance</strong> gains through API and query optimizations, <strong>30+ reusable components</strong>,
            and delivery of <strong>90+ well-structured endpoints</strong> with proper validation and security best practices. {/* from resume */}
          </p>
        </div>

        <div className="text-gray-600">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="font-medium">Contact</div>
            <div className="mt-2 text-sm">
              <div>📍 Tamil Nadu, India</div>
              <div>✉️ <a href="mailto:narendirannaresh396@gmail.com">narendirannaresh396@gmail.com</a></div>
              <div>📞 +91 93847 62499</div>
              <div className="mt-2">
                <a
                  href="https://drive.google.com/uc?export=download&id=10AMJ6ESPKP-EeODv3fS36zqkEobFa91Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 underline"
                >
                  Download Resume
                </a>
              </div>
              <div className="mt-1">
                <a
                  href="https://www.linkedin.com/in/narendiran-e-665102287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 underline"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
