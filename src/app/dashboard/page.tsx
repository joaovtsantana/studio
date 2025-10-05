import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import placeholderImages from '@/lib/placeholder-images.json';
import { CircleArrowRight } from 'lucide-react';

const cardData = [
  {
    id: 'denunciar',
    title: 'DENUNCIAR',
    imageId: 'dashboard-denunciar',
    href: '#',
  },
  {
    id: 'cursos',
    title: 'CURSOS E CERTIFICAÇÕES',
    imageId: 'dashboard-cursos',
    href: '#',
  },
  {
    id: 'monitoramento',
    title: 'MONITORAMENTO',
    imageId: 'dashboard-monitoramento',
    href: '#',
  },
];

export default function DashboardPage() {
  const imageMap = new Map(placeholderImages.placeholderImages.map(p => [p.id, p]));

  return (
    <div className="space-y-8 pb-8">
      {cardData.map((item) => {
        const image = imageMap.get(item.imageId);
        return (
        <Card key={item.id} className="bg-card text-card-foreground overflow-hidden shadow-lg border-none">
          <CardContent className="p-0 relative">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint={image.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <Button
              asChild
              size="lg"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 max-w-xs bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-bold text-lg"
            >
              <Link href={item.href}>
                {item.title} <CircleArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      )})}
    </div>
  );
}
