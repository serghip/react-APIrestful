import React from 'react';
import AddForm from '../components/AddForm';
import Box from '@mui/material/Box';
import ErrorAlert from '../components/ErrorAlert';
import SuccessAlert from '../components/SuccessAlert';

const AddProduct = () => {
    return (
        <>
        <h3>Inserte un nuevo producto</h3>
        <AddForm />
        <Box id='errorBoxAdd' style={{display:'none'}}>
			<ErrorAlert/>
		</Box>
		<Box id='successBoxAdd' style={{display:'none'}}>
			<SuccessAlert/>
		</Box>
        </>        
    )
}

export default AddProduct;