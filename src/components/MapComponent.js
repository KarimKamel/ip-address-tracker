import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

function MyComponent({ center, zoom }) {
	const map = useMap();
	// console.log(center, zoom);
	map.setView(center, zoom);
	// map.flyTo([50, 50]);

	return null;
}

export default function MapComponent(props) {
	const { center, zoom } = props;
	const [coords, setCoords] = useState({ lat: '50', lng: '50' });
	const [zoomState, setZoom] = useState(13);
	useEffect(() => {
		let { lat, lng } = center;
		lat = lat + 0.006;
		setCoords([lat, lng]);
		setZoom(zoom);
	}, [center, zoom]);

	return (
		<div className='z-0 h-full bg-gray-200'>
			<MapContainer
				className='h-full'
				center={center}
				zoom={zoom}
				scrollWheelZoom={true}
				zoomControl={false}
			>
				<MyComponent center={coords} zoom={zoomState} />
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={center}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}
