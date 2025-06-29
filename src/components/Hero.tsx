import { Button } from "@/components/ui/button";
const Hero = () => {
  const handlePortfolioClick = () => {
    window.open('http://jony-mia.ct.ws', '_blank', 'noopener,noreferrer');
  };
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Hi, I'm Jony Mia
            </h1>
            <h2 className="text-2xl lg:text-3xl text-blue-200 mb-6 font-light">
              Web Developer & Digital Craftsman
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Passionate web developer specializing in WordPress, PHP, React, and modern web technologies. 
              I create beautiful, functional websites that deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" onClick={handlePortfolioClick} className="border-white hover:bg-gray-100 px-8 py-3 text-lg text-slate-600">
                View Portfolio
              </Button>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
                <img src="/lovable-uploads/fda80385-0418-4962-a190-3156fe30c3fa.png" alt="Jony Mia - Web Developer" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;