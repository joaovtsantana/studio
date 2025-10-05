import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import placeholderImages from '@/lib/placeholder-images.json';

const resources = [
  {
    title: 'The Ultimate Guide to Home Recycling',
    description: 'Learn what you can and can\'t recycle in your area and how to do it effectively.',
    imageId: 'resource-recycling',
  },
  {
    title: 'Starting Your First Community Garden',
    description: 'A step-by-step guide to finding a plot, gathering volunteers, and growing your own food.',
    imageId: 'resource-gardening',
  },
  {
    title: 'Is Solar Power Right for Your Home?',
    description: 'Understand the costs, benefits, and process of installing solar panels.',
    imageId: 'resource-solar',
  },
    {
    title: 'Composting for Beginners',
    description: 'Turn your kitchen scraps into nutrient-rich soil for your garden.',
    imageId: 'resource-composting',
  },
  {
    title: 'Reducing Your Plastic Footprint',
    description: 'Simple swaps and habits to dramatically reduce plastic waste in your daily life.',
    imageId: 'resource-water',
  },
  {
    title: 'The Benefits of Green Commuting',
    description: 'Explore how biking, walking, and public transport can benefit you and the environment.',
    imageId: 'resource-transport',
  },
];

export default function ResourcesPage() {
    const imageMap = new Map(placeholderImages.placeholderImages.map(p => [p.id, p]));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Tips & Resources</h1>
        <p className="text-muted-foreground">
          Guides to help you understand environmental challenges and make a positive impact.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => {
            const image = imageMap.get(resource.imageId);
            return (
          <Card key={resource.title} className="flex flex-col">
            <CardHeader className="p-0">
                {image && (
                     <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="rounded-t-lg object-cover aspect-video"
                        data-ai-hint={image.imageHint}
                    />
                )}
            </CardHeader>
            <CardContent className="p-6 flex-1">
              <CardTitle className="font-headline mb-2">{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <Link href="#" className="text-sm font-semibold text-accent hover:text-accent/90">
                    Read More &rarr;
                </Link>
            </CardFooter>
          </Card>
        )})}
      </div>
    </div>
  );
}
