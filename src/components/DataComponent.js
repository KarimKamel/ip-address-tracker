import React from 'react';

export default function DataComponent(props) {
	const { ip, location, timezone, isp } = props;
	return (
		<div className='relative z-10 flex flex-col items-center justify-around p-3 mx-auto tracking-widest text-center bg-white shadow-lg sm:max-w-2xl sm:flex-row rounded-2xl sm:px-6'>
			<div className='pb-3 h-1/4 sm:h-full'>
				<p className='pb-1 font-semibold text-gray-400 uppercase text-xxs'>
					IP Address
				</p>
				<h1 className='font-bold '>{ip}</h1>
				{/* <h1>0.0.0.0</h1> */}
			</div>
			{/* <hr style={{ minHeight: '100%', maxHeight: '100vh', margin: 0 }} /> */}
			<div className='pb-3 h-1/4 sm:h-full'>
				<p className='pb-1 font-semibold text-gray-400 uppercase text-xxs'>
					location
				</p>
				<h1 className='font-bold '>{location}</h1>
				{/* <h1>Brooklyn,NY,1001</h1> */}
			</div>
			<div className='pb-3 h-1/4 sm:h-full'>
				<p className='pb-1 font-semibold text-gray-400 uppercase text-xxs'>
					TimeZone
				</p>
				<h1 className='font-bold '>{timezone}</h1>
				{/* <h1>UTC -5:00</h1> */}
			</div>
			<div className=' h-1/4 sm:h-full sm:pb-3'>
				<p className='pb-1 font-semibold text-gray-400 uppercase text-xxs'>
					ISP
				</p>
				<h1 className='font-bold '>{isp}</h1>
				{/* <h1>
						SpaceX <br />
						Starlink
					</h1> */}
			</div>
		</div>
	);
}
