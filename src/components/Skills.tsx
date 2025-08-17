
const Skills = () => {
  const skills = [
    { name: "WordPress", level: 95, color: "bg-blue-600" },
    { name: "PHP", level: 90, color: "bg-purple-600" },
    { name: "React.js", level: 85, color: "bg-cyan-600" },
    { name: "JavaScript", level: 88, color: "bg-yellow-500" },
    { name: "HTML/CSS", level: 92, color: "bg-orange-500" },
    { name: "MySQL", level: 80, color: "bg-green-600" },
  ];

  const technologies = [
    "WordPress", "PHP", "React.js", "JavaScript", "HTML5", "CSS3",
    "MySQL", "jQuery", "Bootstrap", "Tailwind CSS", "Git", "REST API"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technical Proficiency</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      <span className="text-gray-600 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technologies & Tools</h3>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-800 hover:text-blue-800 rounded-lg text-sm font-medium transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
