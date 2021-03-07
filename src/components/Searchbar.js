import React from 'react';
import arrow from '../images/icon-arrow.svg';
import ReactTooltip from 'react-tooltip';

export default function Searchbar(props) {
	const { searchInput, onChange, onSubmit } = props;

	return (
		<form onSubmit={onSubmit} className='flex justify-center pt-3 mb-4'>
			<div className='relative inline-flex justify-center text-center shadow-md h-14 w-96 sm:w-108'>
				<input
					data-tip=' enter IP address or domain name'
					className='w-full px-3 rounded-l-lg lg:max-w-md focus:outline-none focus:ring-inset focus:ring-yellow-400 focus:ring '
					placeholder='insert ip address...'
					type='text'
					value={searchInput}
					onClick={() => {
						ReactTooltip.hide();
					}}
					onChange={onChange}
				></input>
				<button
					className='relative pt-1 text-xl font-bold text-white bg-black rounded-r-lg focus:ring focus:ring-inset focus:bg-green-600 focus:ring-gray-700 focus:outline-none w-14 hover:bg-gray-600'
					type='submit'
				>
					<img
						alt='search icon'
						className='absolute inset-y-3.5 inset-x-5'
						src={arrow}
					></img>
				</button>
			</div>
			<ReactTooltip place='top' type='dark' effect='float' delayShow={500} />
		</form>
	);
}
