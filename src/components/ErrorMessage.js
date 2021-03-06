import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	root: {
		backgroundColor: () => 'red',
	},
});

export default function ErrorMessage() {
	const classes = useStyles();
	return <div>Not a valid domain name or IP address</div>;
}
