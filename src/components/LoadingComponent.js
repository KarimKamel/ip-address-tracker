import React from 'react';
import ReactLoading from 'react-loading';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
	loading: {},
});

export default function LoadingComponent({ type, color }) {
	var classes = useStyles();
	return (
		<ReactLoading
			type={type}
			color={color}
			className='absolute z-20 w-1/2 h-auto transform -translate-x-1/2 opacity-100 md:w-1/6 sm:w-1/4 top-1/2 left-1/2'
		/>
	);
}
