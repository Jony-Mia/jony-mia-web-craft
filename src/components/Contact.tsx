
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:ajonymia321@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+8801770522886";
  };

  const handlePortfolioClick = () => {
    window.open("http://jony-mia.ct.ws", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-12"></div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project 
            and create something amazing together.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/15 transition-all">
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300 mb-4">ajonymia321@gmail.com</p>
              <Button 
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                onClick={handleEmailClick}
              >
                Send Email
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/15 transition-all">
              <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300 mb-4">+8801770522886</p>
              <Button 
                variant="outline" 
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
                onClick={handlePhoneClick}
              >
                Call Now
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/15 transition-all">
              <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mb-4 border-2 border-purple-400">
                <img 
                  src="/lovable-uploads/fda80385-0418-4962-a190-3156fe30c3fa.png" 
                  alt="Jony Mia" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Portfolio</h3>
              <p className="text-gray-300 mb-4">jony-mia.ct.ws</p>
              <Button 
                variant="outline" 
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                onClick={handlePortfolioClick}
              >
                View Work
              </Button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6">
              Whether you need a custom WordPress site, a React application, 
              or PHP development, I'm here to help bring your vision to life.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              onClick={handleEmailClick}
            >
              Let's Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
