import isValidDomain from 'is-valid-domain';
import isIp from 'is-ip';
const GEO_IPIFY_URL =
	'https://geo.ipify.org/api/v1?apiKey=at_ojgi2vskeKhqPHFldVfDc0kODxpE4';
const IPIFY_URL = 'https://api64.ipify.org?format=json';

const getData = async (input) => {
	var res;
	var data;
	if (isIp(input)) {
		console.log('IP');
		res = await fetch(`${GEO_IPIFY_URL}&ipAddress=${input}`);
		data = await res.json();
	} else if (isValidDomain(input)) {
		console.log('domain');
		res = await fetch(`${GEO_IPIFY_URL}&domain=${input}`);
		data = await res.json();
	}
	return data;
};

const getIPAddress = async () => {
	const res = await fetch(IPIFY_URL);
	const data = await res.json();
	return data.ip;
};

export { getData, getIPAddress };
