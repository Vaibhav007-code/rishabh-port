import { Video, Scissors, Camera, Lightbulb, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Creation",
    description: "Complete video production from concept to final cut",
    features: [
      "Corporate videos",
      "Event coverage", 
      "Short films",
      "Commercial ads"
    ],
    highlight: "End-to-end production"
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Video Editing", 
    description: "Professional editing with fast turnaround and quality polish",
    features: [
      "Adobe Premiere Pro",
      "Final Cut Pro",
      "CapCut mastery",
      "Color grading"
    ],
    highlight: "Quick delivery"
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Professional Shooting",
    description: "Cinematic visuals with high-end equipment and lighting",
    features: [
      "Sony A6700 camera",
      "RGB lighting setups",
      "Cinematic shots",
      "Clean compositions"
    ],
    highlight: "Premium equipment"
  }
];

const processSteps = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Concept",
    description: "We start with your vision and develop the creative concept"
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Production",
    description: "Professional shooting with cinema-grade equipment"
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Post-Production", 
    description: "Expert editing, color grading, and audio mixing"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Delivery",
    description: "Final video delivered in your preferred format"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            What I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional video services tailored to bring your vision to life with creativity and technical excellence.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="glass glass-hover border-0 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {service.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="glass glass-hover rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">My Creative Process</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A streamlined workflow that ensures quality results and client satisfaction at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-purple-500/50" 
                       style={{ transform: 'translateX(50%)' }} />
                )}
                
                <div className="relative z-10 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass glass-hover rounded-2xl p-8 max-w-2xl mx-auto">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Get a personalized quote for your video project. Fast turnaround, competitive pricing, and exceptional quality guaranteed.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}