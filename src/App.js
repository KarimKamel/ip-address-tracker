import Header from './components/Header';
import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import DataComponent from './components/DataComponent';
import './styles.css';
import MapComponent from './components/MapComponent';
import { useAlert, positions, transitions, types } from 'react-alert';
import ErrorMessage from './components/ErrorMessage';
import LoadingComponent from './components/LoadingComponent';
import { getData, getIPAddress } from './api/util';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = createUseStyles({
	loading: {
		opacity: '40%',
	},
});

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

		if (data && data.as) {
			updateData(data);
		} else {
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
		setIsLoading(false);
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
