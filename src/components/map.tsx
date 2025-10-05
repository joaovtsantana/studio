'use client';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useRef } from 'react';

// Corrige o problema com os ícones do marcador no Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


export default function Map() {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<L.Map | null>(null);

    useEffect(() => {
        // Inicializa o mapa apenas se o container existir e não houver instância do mapa
        if (mapRef.current && !mapInstance.current) {
            const position: [number, number] = [-23.5505, -46.6333]; // São Paulo coordinates

            const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            });

            const goesSatelliteLayer = L.tileLayer('https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/GEOCOLOR/{z}/{x}/{y}.png', {
                attribution: 'NOAA / NESDIS / STAR',
                maxZoom: 18,
            });

            mapInstance.current = L.map(mapRef.current).setView(position, 13);
            
            osmLayer.addTo(mapInstance.current);
            
            const baseMaps = {
                "OpenStreetMap": osmLayer,
                "GOES Satellite": goesSatelliteLayer
            };

            L.control.layers(baseMaps).addTo(mapInstance.current);

            L.marker(position, { draggable: true })
             .addTo(mapInstance.current)
             .bindPopup('Local da denúncia. <br /> Arraste para ajustar.');
        }

        // Função de limpeza para destruir a instância do mapa ao desmontar
        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []);

    return (
        <div ref={mapRef} className="h-[400px] w-full z-0" />
    );
}
