import React, { useContext ,useState} from 'react';
import AppContext from '../context/AppContext';

import '../styles/ProductList.scss';
import ArticleHome from '../components/ArticleHome';
import ProductItem from '../components/ProductItem';

import PropTypes, { node } from 'prop-types';
//Material Desing
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { display, width } from '@mui/system';
import ErrorAlert from '../components/ErrorAlert';
import SuccessAlert from '../components/SuccessAlert';

//TablePagination
function TablePaginationActions(props) {
	const theme = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;

	const handleFirstPageButtonClick = (event) => {
		onPageChange(event, 0);
	};

	const handleBackButtonClick = (event) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event) => {
		onPageChange(event, page + 1);
	};

	const handleLastPageButtonClick = (event) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<Box sx={{ flexShrink: 0, ml: 2.5, width: 'max-content' }}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label="first page"
			>
				{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
				{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</Box>
	);
}

//ProductList
const ProductList = (busqueda) => {
	const rows= busqueda.busqueda;

	//React state y calculo por hoja
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	// Evita un salto de diseño al llegar a la última página con filas vacías
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (		
		<>
			<section>
				<ArticleHome />

				<Paper elevation={3} sx={{ borderRadius: 5 }}>
					<TableContainer>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell align="center">ID</TableCell>
									<TableCell align="center">Articulo</TableCell>
									<TableCell align="center">Precio</TableCell>
									<TableCell align="center">Eliminar</TableCell>
									<TableCell align="center">Editar</TableCell>
								</TableRow>
							</TableHead>
							{/*TABLEBODY por producto individual*/}
							<TableBody>
								{(rowsPerPage > 0
									? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									: rows
								).map((row) => (
									<TableRow id={row.id} key={row.id}>
										<ProductItem row={row}></ProductItem>
									</TableRow>
								))}

								{emptyRows > 0 && (
									<TableRow style={{ height: 53 * emptyRows }}>
										<TableCell colSpan={6} />
									</TableRow>
								)}
							</TableBody>
							<TableFooter>
								<TableRow>
									{/*TABLEPAGINATION*/}
									<TablePagination
										rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
										colSpan={5}
										count={rows.length}
										rowsPerPage={rowsPerPage}
										page={page}
										SelectProps={{
											inputProps: {
												'aria-label': 'rows per page',
											},
											native: true,
										}}
										onPageChange={handleChangePage}
										onRowsPerPageChange={handleChangeRowsPerPage}
										ActionsComponent={TablePaginationActions}
									/>
								</TableRow>
							</TableFooter>
						</Table>
					</TableContainer>
				</Paper>
			</section >
			<Box id='errorBoxPr' style={{ display: 'none' }}>
				<ErrorAlert />
			</Box>
			<Box id='successBoxPr' style={{ display: 'none' }}>
				<SuccessAlert />
			</Box>
		</>
	);
}

export default ProductList;
