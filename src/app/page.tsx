import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import placeholderImages from '@/lib/placeholder-images.json';
import { ArrowRight } from 'lucide-react';

export default function PresentationPage() {
  const heroImage = placeholderImages.placeholderImages.find(p => p.id === 'hero-forest');

  return (
    <div className="flex flex-col min-h-screen bg-primary text-primary-foreground">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <div className="flex items-center gap-2 text-primary-foreground">
            <Logo />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none font-headline">
                    A SUA Plataforma de Justiça Ambiental Comunitária
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                    VerdeHub is your platform to connect with local environmental data, discuss important issues, and find resources to make a tangible impact.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-bold">
                    <Link href="/login">
                      ACESSO RÁPIDO <ArrowRight className="ml-2"/>
                    </Link>
                  </Button>
                </div>
              </div>
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
