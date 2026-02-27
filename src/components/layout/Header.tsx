
"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Header() {
  const logo = PlaceHolderImages.find(img => img.id === 'ngo-logo');

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          {logo && (
            <div className="w-10 h-10 relative overflow-hidden rounded-full border border-white/20">
              <Image 
                src={logo.imageUrl} 
                alt="Goodwill Link Logo" 
                fill 
                className="object-cover"
                data-ai-hint="ngo logo"
              />
            </div>
          )}
          <span className="text-xl font-headline font-bold tracking-tight">Goodwill Link</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/donate">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white transition-all font-medium">
              Donate
            </Button>
          </Link>
          <Link href="/auth">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all font-medium">
              Sign In
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
