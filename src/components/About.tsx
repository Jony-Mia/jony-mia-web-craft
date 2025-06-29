
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Crafting Digital Experiences
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate web developer with expertise in creating dynamic, 
                responsive websites and web applications. My journey in web development 
                has equipped me with a diverse skill set spanning both frontend and backend technologies.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I specialize in WordPress development, PHP programming, and modern 
                JavaScript frameworks like React. I believe in writing clean, 
                maintainable code and creating user experiences that are both 
                beautiful and functional.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Problem Solver</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Team Player</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Continuous Learner</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">What I Do</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Custom WordPress Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    PHP Web Applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    React.js Frontend Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Responsive Web Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    API Integration & Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
