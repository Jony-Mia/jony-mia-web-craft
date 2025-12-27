import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
<<<<<<< HEAD
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
=======
import { Mail, Phone, MapPin, Send } from 'lucide-react';
>>>>>>> 2885f632fd8de9fbd7e0409bef73fcfc2b54fc27

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 contact-content">
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how I can help you
          </p>
        </div>

<<<<<<< HEAD
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 contact-content">
=======
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="contact-content">
>>>>>>> 2885f632fd8de9fbd7e0409bef73fcfc2b54fc27
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out to me through any of these channels. 
              I'll get back to you as soon as possible!
            </p>

<<<<<<< HEAD
            <div className="space-y-4">
              <div className="professional-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-foreground" size={22} />
=======
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Mail className="text-primary-foreground" size={24} />
>>>>>>> 2885f632fd8de9fbd7e0409bef73fcfc2b54fc27
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <a href="mailto:jony@example.com" className="font-semibold hover:text-primary transition-colors">
                    jony@example.com
                  </a>
                </div>
              </div>

<<<<<<< HEAD
              <div className="professional-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-foreground" size={22} />
=======
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Phone className="text-primary-foreground" size={24} />
>>>>>>> 2885f632fd8de9fbd7e0409bef73fcfc2b54fc27
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Phone</p>
                  <a href="tel:+8801XXXXXXXXX" className="font-semibold hover:text-primary transition-colors">
                    +880 1XXX-XXXXXX
                  </a>
                </div>
              </div>

<<<<<<< HEAD
              <div className="professional-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-foreground" size={22} />
=======
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <MapPin className="text-primary-foreground" size={24} />
>>>>>>> 2885f632fd8de9fbd7e0409bef73fcfc2b54fc27
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="font-semibold">Bangladesh</p>
                </div>
<<<<<<< HEAD
              </div>

              <div className="professional-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Availability</p>
                  <p className="font-semibold">Sun - Thu, 9AM - 6PM</p>
                </div>
              </div>

              <div className="professional-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Globe className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Response Time</p>
                  <p className="font-semibold">Within 24 Hours</p>
                </div>
=======
>>>>>>> 2885f632fd8de9fbd7e0409bef73fcfc2b54fc27
              </div>
            </div>
          </div>

          {/* Contact Form */}
<<<<<<< HEAD
          <div className="lg:col-span-3 contact-content">
            <div className="professional-card p-8">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3.5 rounded-xl bg-secondary border-2 border-border focus:border-primary focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-secondary border-2 border-border focus:border-primary focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+880 1XXX-XXXXXX"
                      className="w-full px-4 py-3.5 rounded-xl bg-secondary border-2 border-border focus:border-primary focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="Project Discussion"
                      className="w-full px-4 py-3.5 rounded-xl bg-secondary border-2 border-border focus:border-primary focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className="w-full px-4 py-3.5 rounded-xl bg-secondary border-2 border-border focus:border-primary focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 text-lg"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
=======
          <div className="contact-content glass-card p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
>>>>>>> 2885f632fd8de9fbd7e0409bef73fcfc2b54fc27
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
