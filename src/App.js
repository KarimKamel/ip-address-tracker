import Header from './components/Header';
import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import DataComponent from './components/DataComponent';
import './styles.css';
import MapComponent from './components/MapComponent';
// const isValidDomain = require('is-valid-domain')
import isValidDomain from 'is-valid-domain';
import isIp from 'is-ip';
import { useAlert, positions, transitions, types } from 'react-alert';
import ErrorMessage from './components/ErrorMessage';
import LoadingComponent from './components/LoadingComponent';

import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = createUseStyles({
	loading: {
		opacity: '40%',
	},
});

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
	const alert = useAlert();
	const classes = useStyles();
	const [searchInput, setSearchInput] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({
		ip: '',
		location: '',
		timezone: '',
		coords: { lat: '', lng: '' },
	});

	const updateData = (data) => {
		setData({
			ip: data.ip,
			isp: data.isp,
			coords: { lat: data.location.lat, lng: data.location.lng },
			location: `${data.location.city}, ${data.location.country}`,
			timezone: data.location.timezone,
		});
	};

	useEffect(() => {
		const setState = async () => {
			setIsLoading(true);
			const ip = await getIPAddress();
			const data = await getData(ip);
			updateData(data);
			setIsLoading(false);
		};
		setState();
	}, []);

	const handleChange = (event) => {
		setSearchInput(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		const data = await getData(searchInput);
		if (data.as) {
			console.log('getting');

			updateData(data);
			setIsLoading(false);
		} else {
			setIsLoading(false);
			alert.show(<ErrorMessage />, {
				position: positions.BOTTOM_CENTER,
				type: types.ERROR,
				timeout: 3000,
				transition: transitions.SCALE,
				containerStyle: {
					zIndex: 100,
					borderRadius: '3rem',
				},
			});
		}
	};
	const loadingClass = clsx(
		isLoading && classes.loading,
		'flex flex-col w-screen h-screen App relative',
	);

	return (
		<div>
			{isLoading && <LoadingComponent type='spin' color='blue' />}
			<div className={loadingClass}>
				<Header>
					<Searchbar
						onChange={handleChange}
						onSubmit={handleSubmit}
						searchInput={searchInput}
					/>

					<DataComponent
						ip={data.ip}
						isp={data.isp}
						timezone={data.timezone}
						location={data.location}
					/>
				</Header>

				<MapComponent center={data.coords} zoom={13} />
			</div>
		</div>
	);
}

export default App;
