
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import babiesHavenPreview from "@/assets/babieshavenbd-preview.png";
import fastitcarePreview from "@/assets/fastitcare-preview.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Babies Haven BD",
      description: "Complete e-commerce solution for baby products with WooCommerce integration and custom design",
      image: babiesHavenPreview,
      technologies: ["WordPress", "WooCommerce", "PHP", "E-commerce"],
      category: "E-commerce Development",
      link: "https://babieshavenbd.com"
    },
    {
      id: 2,
      title: "FastIT Care",
      description: "Professional web design service website with Bengali language support and modern UI",
      image: fastitcarePreview,
      technologies: ["WordPress", "Custom Design", "Multilingual", "Professional"],
      category: "Web Design Services",
      link: "https://fastitcare.com"
    },
    {
      id: 3,
      title: "React Web Application",
      description: "Modern single-page application built with React and advanced state management",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=entropy&auto=format",
      technologies: ["React", "JavaScript", "API Integration", "Responsive"],
      category: "React Development"
    },
    {
      id: 4,
      title: "Restaurant Website",
      description: "Beautiful restaurant website with online ordering and reservation system",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&crop=entropy&auto=format",
      technologies: ["WordPress", "Custom Plugin", "PHP", "JavaScript"],
      category: "WordPress Development"
    },
    {
      id: 5,
      title: "Portfolio Dashboard",
      description: "Interactive dashboard for managing portfolio content with React and modern UI",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format",
      technologies: ["React", "TypeScript", "Dashboard UI", "Data Visualization"],
      category: "React Development"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Custom WordPress blog platform with advanced content management features",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      technologies: ["WordPress", "Custom Post Types", "PHP", "SEO Optimization"],
      category: "WordPress Development"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              My Portfolio
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of my recent projects showcasing WordPress development, 
              React applications, and custom web solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg cursor-pointer"
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  {project.link && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Want to see more of my work? Visit my complete portfolio
            </p>
            <a 
              href="http://jony-mia.ct.ws" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              View Complete Portfolio
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
