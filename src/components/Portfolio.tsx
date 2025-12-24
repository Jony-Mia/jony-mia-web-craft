
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import babiesHavenPreview from "@/assets/babieshavenbd-preview.png";
import fastitcarePreview from "@/assets/image2.png";
import solutionbdPreview from "@/assets/image3.png";
import perfume from "@/assets/image4.png";
import qibla from "@/assets/image1.png";
import watch from "@/assets/image.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Babies Haven BD",
      description: "Complete e-commerce solution for baby products with WooCommerce integration and custom design",
      image: babiesHavenPreview,
      technologies: ["WordPress", "WooCommerce", "PHP", "E-commerce"],
      category: "E-commerce Website",
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
      title: "Solution BD",
      description: "Health product e-commerce landing page specializing in hair loss treatment solutions with Minoxidil",
      image: solutionbdPreview,
      technologies: ["WordPress", "E-commerce", "Health Products", "Bengali"],
      category: "Health E-commerce",
      link: "https://solutionbd.top"
    },
    {
    
      id: 4,
      title: "Ecommerce Website",
      description: "Beautiful website with many features increasing user web experience.",
      image: qibla,
      technologies: ["WordPress", " Plugin", "PHP"],
      category: "WordPress Development",
      link: "https://qiblaa.com"

    },
    
    {
      id: 5,
      title: "Ecommerce Website",
      description: "Complete e-commerce solution for perfumes and fragnants products with WooCommerce integration and custom design",
      image: perfume,
      technologies: ["WordPress", "WooCommerce","Woodmart"],
      category: "Wordpress Development",
      link: "https://divinearomabd.com"

    },
    {
      id: 6,
      title: "Landing Page for watch",
      description: "Here I build a high qualityful landing page for my client business.",
      image: watch,
      technologies: ["WordPress", "Custom Post Types", "PHP", "SEO Optimization"],
      category: "WordPress Development",
      link:"https://orlolife.xyz"
    }
  ];

  return (
    <section id="portfolio" className="pb-20 bg-gray-50">
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
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
