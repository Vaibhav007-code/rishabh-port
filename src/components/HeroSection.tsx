import { Play, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Hero Card */}
          <div className="glass glass-hover rounded-2xl p-8 md:p-12 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="relative group">
                <img 
                  src="https://i.ibb.co/HDb56k3t/rishub-pro.jpg" 
                  alt="Rishabh Srivastav"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/30 shadow-2xl ring-2 ring-primary/20 transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:border-primary/50 hover:ring-primary/30 animate-float"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Rishabh Srivastav
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
              "Telling stories, one frame at a time"
            </p>
            
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Hello, I'm Rishabh Srivastav, a professional video creator, editor, and shooter with a passion for storytelling through visuals. I craft compelling videos that captivate and convert.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("#portfolio")}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                size="lg"
                className="glass border-primary/30 hover:border-primary/50 group"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Let's Connect
              </Button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass glass-hover rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            
            <div className="glass glass-hover rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">₹25K</div>
              <div className="text-sm text-muted-foreground">Top Project Value</div>
            </div>
            
            <div className="glass glass-hover rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">3rd</div>
              <div className="text-sm text-muted-foreground">IIT Bombay Prize</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}