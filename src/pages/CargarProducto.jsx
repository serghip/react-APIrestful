import React from 'react';
import AddProduct from '../containers/AddProduct';

import '../styles/CargarProducto.scss';

const CargarProducto = () => {
	return (
		<>
		<div className="CargarProducto">
			<h2>Cargar un nuevo producto</h2>	
			<AddProduct></AddProduct>		
		</div>
		</>
	);
}

export default CargarProducto;
