'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { Droplets, Recycle, Wind } from 'lucide-react';
import type { ChartConfig } from '@/components/ui/chart';

const airQualityData = [
  { month: 'January', aqi: 45 },
  { month: 'February', aqi: 52 },
  { month: 'March', aqi: 48 },
  { month: 'April', aqi: 61 },
  { month: 'May', aqi: 55 },
  { month: 'June', aqi: 58 },
];

const waterPurityData = [
  { month: 'January', purity: 88 },
  { month: 'February', purity: 86 },
  { month: 'March', purity: 90 },
  { month: 'April', purity: 85 },
  { month: 'May', purity: 89 },
  { month: 'June', purity: 91 },
];

const recyclingRateData = [
    { month: 'January', rate: 35 },
    { month: 'February', rate: 38 },
    { month: 'March', rate: 42 },
    { month: 'April', rate: 40 },
    { month: 'May', rate: 45 },
    { month: 'June', rate: 48 },
]

const chartConfig: ChartConfig = {
  aqi: {
    label: 'AQI',
    color: 'hsl(var(--chart-2))',
  },
  purity: {
    label: 'Purity',
    color: 'hsl(var(--chart-1))',
  },
  rate: {
    label: 'Rate (%)',
    color: 'hsl(var(--chart-3))',
  },
};

export default function DataPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Environmental Data</h1>
        <p className="text-muted-foreground">
          Access important environmental data from around your community.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Air Quality Index (AQI)</CardTitle>
            <Wind className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">58</div>
            <p className="text-xs text-muted-foreground">Good</p>
            <ChartContainer config={chartConfig} className="h-[150px] w-full mt-4">
              <BarChart accessibilityLayer data={airQualityData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="aqi" fill="var(--color-aqi)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Water Purity</CardTitle>
            <Droplets className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">91%</div>
            <p className="text-xs text-muted-foreground">Excellent</p>
             <ChartContainer config={chartConfig} className="h-[150px] w-full mt-4">
              <BarChart accessibilityLayer data={waterPurityData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="purity" fill="var(--color-purity)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Recycling Rate</CardTitle>
            <Recycle className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48%</div>
            <p className="text-xs text-muted-foreground">+3% from last month</p>
             <ChartContainer config={chartConfig} className="h-[150px] w-full mt-4">
              <BarChart accessibilityLayer data={recyclingRateData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="rate" fill="var(--color-rate)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
