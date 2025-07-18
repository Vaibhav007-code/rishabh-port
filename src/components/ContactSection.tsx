import { useState } from "react";
import { Mail, Instagram, Youtube, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Contact info saved!",
      description: "Connect with me on LinkedIn or Instagram for quick response.",
    });

    setFormData({ name: "", email: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://www.instagram.com/kalakar_kahl0?igsh=MWk1Yzl1eHozYzJ2ZA%3D%3D&utm_source=qr"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      label: "YouTube", 
      href: "https://youtube.com/@kalaakar_kahlo1?si=yocT5zx0tdhSyB_q"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rishabh-srivastav-ba34b6298/"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            "Let's create something unforgettable."
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Social Links */}
          <div className="space-y-8 max-w-2xl mx-auto">
            <Card className="glass border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Follow My Work</h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 glass rounded-lg glass-hover group"
                    >
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <div className="text-white">
                          {social.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {social.label}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact CTA */}
            <Card className="glass border-0 bg-gradient-primary/10">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-bold mb-4">Ready to Collaborate?</h4>
                <p className="text-muted-foreground mb-6">
                  Connect with me on LinkedIn or Instagram for project discussions and collaborations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="glass border-primary/30 hover:border-primary/50 group"
                    onClick={() => window.open('https://www.linkedin.com/in/rishabh-srivastav-ba34b6298/', '_blank')}
                  >
                    <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    className="glass border-primary/30 hover:border-primary/50 group"
                    onClick={() => window.open('https://www.instagram.com/kalakar_kahl0?igsh=MWk1Yzl1eHozYzJ2ZA%3D%3D&utm_source=qr', '_blank')}
                  >
                    <Instagram className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}