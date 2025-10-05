'use client';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Corrige o problema com os ícones do marcador no Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


export default function Map() {
    const position: [number, number] = [-23.5505, -46.6333]; // São Paulo coordinates

    return (
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
    );
}
