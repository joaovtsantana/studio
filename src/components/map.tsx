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
            const position: [number, number] = [-14.2350, -51.9253]; // Coordenadas centradas no Brasil

            const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            });

            const esriSatelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            });

            const nasaGibsLayer = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/BlueMarble_NextGeneration/default/{TileMatrixSet=GoogleMapsCompatible_Level9}/{z}/{y}/{x}.jpeg', {
                attribution: 'NASA Global Imagery Browse Services (GIBS)',
                maxZoom: 9
            });

            mapInstance.current = L.map(mapRef.current).setView(position, 5);
            
            osmLayer.addTo(mapInstance.current);
            
            const baseMaps = {
                "Padrão": osmLayer,
                "Satélite (Esri)": esriSatelliteLayer,
                "Satélite (NASA)": nasaGibsLayer
            };

            L.control.layers(baseMaps).addTo(mapInstance.current);

            L.marker([-23.5505, -46.6333], { draggable: true })
             .addTo(mapInstance.current)
             .bindPopup('São Paulo. <br /> Arraste para ajustar.');
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
