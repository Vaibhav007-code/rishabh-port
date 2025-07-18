import { ExternalLink, Play, Award, Briefcase, Video, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Function to extract YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Function to get thumbnail URL based on platform
const getThumbnailUrl = (project) => {
  if (project.platform === "YouTube") {
    const videoId = getYouTubeVideoId(project.link);
    if (videoId) {
      // YouTube thumbnail API - maxresdefault for highest quality
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
  }
  
  // Fallback to manual thumbnails for Instagram or if YouTube extraction fails
  return project.thumbnail;
};

const projects = [
  {
    title: "IIT Bombay Short Film – QuickCut 51",
    description: "3rd Prize Winner - A compelling short film showcasing storytelling excellence and technical prowess.",
    type: "Short Film",
    value: "Award Winner",
    link: "https://youtu.be/rNIPlbH_tcU?si=U572fIVI1DML6VEX",
    platform: "YouTube",
    icon: <Award className="w-5 h-5" />,
    highlight: true,
    thumbnail: "https://i.ibb.co/LzPS2Z8D/iit-bombay-img.jpg" // Fallback
  },
  {
    title: "PLAYnWIN Commercial Ad",
    description: "High-value client project worth ₹25,000. Complete commercial video production from concept to delivery.",
    type: "Commercial",
    value: "₹25,000",
    link: "https://www.instagram.com/reel/DIZIAg6zk5_/?igsh=MTRnYm1rM2ltZzAzNQ==",
    platform: "Instagram",
    icon: <Briefcase className="w-5 h-5" />,
    highlight: true,
    thumbnail: "https://i.ibb.co/zjHhhCS/add-shoot.png" // Will use this for Instagram
  },
  {
    title: "PLAYnWIN Instagram Ad",
    description: "Commercial advertisement project showcasing brand storytelling and visual appeal.",
    type: "Commercial",
    value: "Featured",
    link: "https://www.instagram.com/reel/DIZIAg6zk5_/?igsh=MTRnYm1rM2ltZzAzNQ==",
    platform: "Instagram",
    icon: <Briefcase className="w-5 h-5" />,
    highlight: false,
    thumbnail: "https://i.ibb.co/zjHhhCS/add-shoot.png" // Will use this for Instagram
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best video projects, from award-winning short films to high-value commercial work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`glass glass-hover border-0 overflow-hidden group ${
                project.highlight ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardContent className="p-0">
                {/* Thumbnail Image */}
                <div className="relative overflow-hidden h-48 md:h-56 bg-gray-100 dark:bg-gray-800">
               <img 
  src={getThumbnailUrl(project)} 
  alt={`${project.title} thumbnail`}
  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
  onError={(e) => {
    (e.target as HTMLImageElement).src = project.thumbnail;
  }}
/>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="lg"
                      className="bg-white/90 text-black hover:bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2 text-primary">
                      {project.icon}
                      <span className="text-sm font-medium">{project.type}</span>
                    </div>
                    <span className="text-sm font-bold text-primary">{project.value}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="glass border-primary/30 hover:border-primary/50 group/btn"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Watch Now
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary/80"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass glass-hover rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Explore my complete video portfolio and discover the full range of my creative work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                className="glass border-primary/30 hover:border-primary/50"
                onClick={() => window.open('https://youtube.com/@example', '_blank')}
              >
                <Video className="w-4 h-4 mr-2" />
                YouTube Channel
              </Button>
              <Button 
                variant="outline"
                className="glass border-primary/30 hover:border-primary/50"
                onClick={() => window.open('https://instagram.com/example', '_blank')}
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}