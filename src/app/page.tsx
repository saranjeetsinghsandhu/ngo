
import { MissionRefinement } from '@/components/ai/MissionRefinement';
import { Heart, Globe, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm border border-accent/20">
          <Heart className="w-4 h-4" />
          <span>Making a Difference</span>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tight leading-tight">
            Our Mission & Core Goals
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            Goodwill Link is dedicated to bridging the gap between those who want to help and the 
            communities that need it most. We focus on delivering direct aid, educational resources, 
            and sustainable infrastructure to underserved regions globally. Our goal is to foster 
            transparency in every donation, ensuring every cent contributes to a brighter, 
            more equitable future for all humanity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-primary/5 hover:border-accent/20 transition-all hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Global Outreach</h3>
            <p className="text-sm text-muted-foreground">Reaching across borders to support communities in need regardless of location.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-primary/5 hover:border-accent/20 transition-all hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Community Led</h3>
            <p className="text-sm text-muted-foreground">Empowering local leaders to define and solve their own unique challenges.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-primary/5 hover:border-accent/20 transition-all hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Total Transparency</h3>
            <p className="text-sm text-muted-foreground">Every donation is tracked and reported, so you know exactly where your help goes.</p>
          </div>
        </div>

        <div className="pt-16 border-t border-primary/10">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-headline font-bold text-primary">Refine Our Message</h2>
            <p className="text-muted-foreground mt-2">Administrative Tool: Help us communicate our goals better using AI.</p>
          </div>
          <MissionRefinement />
        </div>
      </div>
    </div>
  );
}
