import React from 'react';
import ProductSearch from '@components/ProductSearch'
import '@styles/Home.scss';

const Home = () => {
	return (
		<>
			<div className='Home'>
				<h1> Pagina Home</h1>
				<ProductSearch/>
			</div>
			
		</>
	);
}

export default Home;
