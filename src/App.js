import Header from './components/Header';
import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import DataComponent from './components/DataComponent';
import './styles.css';
import MapComponent from './components/MapComponent';
// const isValidDomain = require('is-valid-domain')
import isValidDomain from 'is-valid-domain';
import isIp from 'is-ip';
import { useAlert } from 'react-alert';
import ErrorMessage from './components/ErrorMessage';

// const getData = async (input) => {
// 	var res;
// 	if (isValidDomain) {
// 		res = await fetch(
// 			`https://geo.ipify.org/api/v1?apiKey=at_ojgi2vskeKhqPHFldVfDc0kODxpE4&ipAddress=${input}`,
// 		);
// 	} else {
// 		res = await fetch(
// 			`https://geo.ipify.org/api/v1?apiKey=at_ojgi2vskeKhqPHFldVfDc0kODxpE4&ipAddress=${input}`,
// 		);
// 	}
// const data = await res.json();
// console.log(data);

// return data;
// };
const getData = async (input) => {
	var res;
	if (isValidDomain(input)) {
		console.log('domain');
		res = await fetch(
			`https://geo.ipify.org/api/v1?apiKey=at_ojgi2vskeKhqPHFldVfDc0kODxpE4&domain=${input}`,
		);
	} else if (isIp(input)) {
		console.log('IP');
		res = await fetch(
			`https://geo.ipify.org/api/v1?apiKey=at_ojgi2vskeKhqPHFldVfDc0kODxpE4&ipAddress=${input}`,
		);
	} else {
		res = await fetch(
			`https://geo.ipify.org/api/v1?apiKey=at_ojgi2vskeKhqPHFldVfDc0kODxpE4&domain=${input}`,
		);
	}
	const data = await res.json();
	// console.log(data);

	return data;
};

const getIPAddress = async () => {
	const res = await fetch('https://api64.ipify.org?format=json');

	const data = await res.json();

	return data.ip;
};

function App() {
	const [searchInput, setSearchInput] = useState('');
	const [dataIPAddress, setDataIPAddress] = useState('');
	const [isp, setIsp] = useState('');
	const [location, setLocation] = useState('');
	const [timezone, setTimezone] = useState('');
	const [coords, setCoords] = useState({ lat: '', lng: '' });
	const alert = useAlert();

	const setData = (data) => {
		setDataIPAddress(data.ip);
		setCoords({ lat: data.location.lat, lng: data.location.lng });
		setIsp(data.isp);
		setLocation(`${data.location.city}, ${data.location.country}`);
		setTimezone(data.location.timezone);
	};

	useEffect(() => {
		const setState = async () => {
			const ip = await getIPAddress();

			const data = await getData(ip);
			setData(data);
		};
		setState();
	}, []);

	const handleChange = (event) => {
		setSearchInput(event.target.value);
	};

	// const handleSubmit = async (event) => {
	// 	event.preventDefault();
	// 	getData(searchInput).then((data) => {
	// 		setData(data);
	// 	});
	// };
	const handleSubmit = async (event) => {
		event.preventDefault();
		getData(searchInput).then((data) => {
			console.log(data);
			if (data.as) {
				console.log('getting');
				setData(data);
			} else {
				alert.show(<ErrorMessage />);
			}
		});
	};

	return (
		<div className='flex flex-col w-screen h-screen App'>
			<Header>
				<Searchbar
					onChange={handleChange}
					onSubmit={handleSubmit}
					searchInput={searchInput}
				/>
				<DataComponent
					ip={dataIPAddress}
					isp={isp}
					timezone={timezone}
					location={location}
				/>
			</Header>

			<MapComponent center={coords} zoom={13} />
		</div>
	);
}

export default App;
