import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const forumPosts = [
  {
    topic: 'Proposal for more community gardens in the city center',
    author: 'Jane Doe',
    replies: 12,
    lastPost: '5 hours ago',
    tags: ['Gardening', 'Community'],
  },
  {
    topic: 'Improving our local recycling program',
    author: 'John Smith',
    replies: 28,
    lastPost: '1 day ago',
    tags: ['Recycling', 'Policy'],
  },
  {
    topic: 'Bike lane expansion on Main Street',
    author: 'Emily White',
    replies: 45,
    lastPost: '2 days ago',
    tags: ['Transportation'],
  },
  {
    topic: 'Weekly river cleanup - who is in?',
    author: 'Alex Green',
    replies: 8,
    lastPost: '3 days ago',
    tags: ['Volunteering', 'Water'],
  },
];

export default function ForumPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline">Community Forum</h1>
          <p className="text-muted-foreground">
            Discuss local environmental issues, share tips, and organize.
          </p>
        </div>
        <Button>Create New Post</Button>
      </div>
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Topic</TableHead>
                <TableHead className="hidden sm:table-cell">Author</TableHead>
                <TableHead className="hidden md:table-cell text-center">Replies</TableHead>
                <TableHead className="text-right">Last Post</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {forumPosts.map((post) => (
                <TableRow key={post.topic} className="cursor-pointer">
                  <TableCell>
                    <div className="font-medium">{post.topic}</div>
                    <div className="flex gap-1 mt-1">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{post.author}</TableCell>
                  <TableCell className="hidden md:table-cell text-center">{post.replies}</TableCell>
                  <TableCell className="text-right">{post.lastPost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
