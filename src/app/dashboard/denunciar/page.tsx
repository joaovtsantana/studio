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
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

// Leaflet's default icon doesn't work well with React, so we need to import it manually.
import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconRetinaUrl: iconRetinaUrl.src,
  iconUrl: iconUrl.src,
  shadowUrl: shadowUrl.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function DenunciarPage() {
  const position: [number, number] = [-23.5505, -46.6333]; // São Paulo coordinates

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
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              className="h-[400px] w-full z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} draggable={true}>
                <Popup>
                  Local da denúncia. <br /> Arraste para ajustar.
                </Popup>
              </Marker>
            </MapContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
