import { FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 to-white p-6">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Hi, I'm Sawpon Mondol
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Frontend Developer | HTML, CSS, JavaScript, Tailwind, Bootstrap, React.js
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:rbsawpon79@gmail.com" className="text-blue-500 underline">
            rbsawpon79@gmail.com
          </a>
          <span>|</span>
          <a href="tel:+8801604533887" className="text-blue-500 underline">
            01604533887
          </a>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/sawpon-mondol-37834932b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/rbsawpon8621"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-2xl"
          >
            <FaGithub />
          </a>
        </div>
        <a
          href="/Sawponmondol-CV-Frontend-Developer.pdf"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          download
        >
          Download CV
        </a>
      </section>

      {/* Skills Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-gray-700">
          {["HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "React.js"].map((skill) => (
            <div key={skill} className="p-4 shadow hover:shadow-lg bg-white rounded">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              name: "E-commerce UI",
              desc: "Built with React, components, routing, and API integration.",
              link: "#",
            },
            {
              name: "Responsive Portfolio",
              desc: "Showcasing modern responsive design.",
              link: "#",
            },
            {
              name: "Facebook Demo UI",
              desc: "Frontend clone of Facebook UI with CSS & JS.",
              link: "#",
            },
            {
              name: "Todo App",
              desc: "Add/remove tasks, fully functional React App.",
              link: "#",
            },
          ].map((project) => (
            <div key={project.name} className="p-4 bg-white shadow rounded">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-2">{project.desc}</p>
              <a href={project.link} className="text-blue-500 underline">
                View Live
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-10">
        &copy; {new Date().getFullYear()} Sawpon Mondol. All rights reserved.
      </footer>
    </main>
  );
}

export default App;