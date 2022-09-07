import React from 'react';
import '@styles/ProductItem.scss';
import { TableRow, TableCell, } from '@mui/material';
import ButtonDelete from './ButtonDelete';
import ButtonEdit from './ButtonEdit';

const ProductItem = ({ row }) => {
	return (
		<>
			<TableCell align="center" component="th" scope="row">
				{row.id}
			</TableCell>
			<TableCell align="center">
				{row.title}
			</TableCell>
			<TableCell align="center">
				{row.price}
			</TableCell>
			<TableCell><ButtonDelete product={row}></ButtonDelete></TableCell>
			<TableCell><ButtonEdit product={row}></ButtonEdit></TableCell>
		</>
	);
}

export default ProductItem;
