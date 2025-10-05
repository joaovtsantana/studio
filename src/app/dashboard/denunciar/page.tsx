'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function DenunciarPage() {
    const Map = useMemo(() => dynamic(
        () => import('@/components/map'),
        { 
          loading: () => <p>A map is loading</p>,
          ssr: false
        }
      ), [])

  return (
    <div className="space-y-6 pb-8">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon" className="text-primary">
          <Link href="/dashboard">
            <ChevronLeft className="h-6 w-6" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold font-headline text-primary">
            Denunciar
          </h1>
          <p className="text-muted-foreground">
            Descreva a ocorrência e marque no mapa a localização.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle>Detalhes da Denúncia</CardTitle>
            <CardDescription>
              Forneça os detalhes para que possamos analisar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  placeholder="Ex: Desmatamento em área de preservação"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  placeholder="Descreva o que você viu, incluindo data e hora se possível."
                  className="min-h-[120px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="photo">Anexar Foto</Label>
                <Input id="photo" type="file" />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                Enviar Denúncia
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card className="border-none shadow-lg overflow-hidden">
          <CardHeader>
            <CardTitle>Localização</CardTitle>
            <CardDescription>
              Arraste o marcador para o local exato da ocorrência.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
             <Map />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
