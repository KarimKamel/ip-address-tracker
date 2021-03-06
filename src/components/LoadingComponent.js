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
			height={'20%'}
			width={'20%'}
			className={classes.loading}
		/>
	);
}

// const LoadingComponent = ({ type, color }) => (
// 	<ReactLoading
// 		type={type}
// 		color={color}
// 		height={'20%'}
// 		width={'20%'}
// 		className={classes.loading}
// 	/>
// );

// export default LoadingComponent;
