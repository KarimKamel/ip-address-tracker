import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';

import MapComponent from './components/MapComponent';

const getCoords = (IPAddress) => {
	return fetch(
		`https://geo.ipify.org/api/v1?apiKey=at_ojgi2vskeKhqPHFldVfDc0kODxpE4&ipAddress=${IPAddress}`,
	)
		.then((response) => response.json())
		.then((data) => {
			const lat = data.location.lat;
			const lng = data.location.lng;

			return { lat, lng };
		});
};

function App() {
	const [IPAddress, setIPAddress] = useState([]);
	const [coords, setCoords] = useState({ lat: '30', lng: '30' });

	useEffect(() => {
		fetch('https://api64.ipify.org?format=json')
			.then((response) => response.json())
			.then((data) => setIPAddress(data.ip));
	}, []);

	const handleChange = (event) => {
		setIPAddress(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		getCoords(IPAddress).then((res) => {
			setCoords(res);
			console.log(res);
		});
	};

	return (
		<div className='flex flex-col w-screen h-screen App'>
			<Header
				onChange={handleChange}
				onSubmit={handleSubmit}
				IPAddress={IPAddress}
			/>
			<MapComponent center={coords} zoom={13} />
		</div>
	);
}

export default App;
