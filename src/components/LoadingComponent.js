import React from 'react';
import ReactLoading from 'react-loading';

export default function LoadingComponent({ type, color }) {
	return (
		<ReactLoading
			type={type}
			color={color}
			// reactLoading classes need to be "!important" to override default Styles. hence the important modifier was added in the tailwind.config.js file
			className='absolute z-20 w-1/2 h-auto transform -translate-x-1/2 opacity-100 md:w-1/6 sm:w-1/4 top-1/2 left-1/2'
		/>
	);
}
