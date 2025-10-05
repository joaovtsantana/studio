import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, BarChart3, BookOpen, MessagesSquare } from 'lucide-react';

const summaryCards = [
    {
        title: "Environmental Data",
        description: "Explore local air and water quality metrics.",
        icon: BarChart3,
        link: "/dashboard/data",
    },
    {
        title: "Community Forum",
        description: "Join discussions on local environmental topics.",
        icon: MessagesSquare,
        link: "/dashboard/forum",
    },
    {
        title: "Tips & Resources",
        description: "Discover ways to make a positive impact.",
        icon: BookOpen,
        link: "/dashboard/resources",
    },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Welcome Back!</h1>
        <p className="text-muted-foreground">
          Here&apos;s a quick overview of what&apos;s happening in your community.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {summaryCards.map((card) => (
             <Card key={card.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                    <card.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <p className="text-xs text-muted-foreground">{card.description}</p>
                    <Button asChild variant="link" className="px-0">
                        <Link href={card.link}>
                            Go to {card.title} <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        ))}
      </div>
       <Card>
        <CardHeader>
          <CardTitle>Your Recent Activity</CardTitle>
          <CardDescription>
            You haven't posted anything yet. Start a conversation in the forum!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/dashboard/forum">Create a New Post</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
