
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-lg font-headline font-bold">Goodwill Link</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Empowering communities through transparent giving and direct impact initiatives.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-md font-headline font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>hello@goodwilllink.org</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span>123 Humanity Blvd, Care City, CA 90210</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-md font-headline font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">How We Work</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-primary-foreground/60 flex flex-col md:flex-row items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} Goodwill Link. All rights reserved.</span>
          <span className="hidden md:inline">|</span>
          <span className="flex items-center gap-1">Made with <Heart className="w-3 h-3 text-destructive" /> for humanity.</span>
        </div>
      </div>
    </footer>
  );
}
