import { Heart, Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="glass border-t border-primary/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Camera className="w-5 h-5 text-primary" />
            <span className="text-sm">
              © 2024 Rishabh Srivastav. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for visual storytelling</span>
          </div>
        </div>
      </div>
    </footer>
  );
}