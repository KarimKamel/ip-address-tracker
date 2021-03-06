import React from 'react';
import headerBackground from '../images/pattern-bg.png';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	root: {
		backgroundImage: `url(${headerBackground})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		width: '100vw',
		height: '170px',
		padding: '0.5rem',
		position: 'relative',
	},
	'@media (max-width: 639px)': {
		root: {
			backgroundImage: `url(${headerBackground})`,
			backgroundPositionX: '-400px',
			height: '250px',
			padding: '1.5rem',
		},
	},
});

export default function Header(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h1 className='text-2xl font-bold text-center text-white'>
				IP address tracker
			</h1>
			{props.children}
		</div>
	);
}
