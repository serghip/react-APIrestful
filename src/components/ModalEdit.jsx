import React, { useState } from 'react';
import useEditProducts from '../hooks/useEditProducts';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Edit'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from  './ErrorAlert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalEdit = ({ product }) => {
    const [modal, SetModal] = useState(false);

    const abrirCerrarModal = () => {
        SetModal(!modal);
        console.log(modal);
    }
    const body = (
        <Box sx={style}>
            <div aling='center'>
                <h2>Ingrese los nuevos datos</h2>
            </div>
            <form style={{ display: 'grid' }} action='/' method='POST'>
                <TextField sx={{paddingBottom: '10px'}} minlenght='1' label="Articulo" id="articulo" name="articulo" defaultValue={product.title} required></TextField>
                <br />
                <TextField minlenght='1' label="Precio" id="precio" name="precio" defaultValue={product.price} required />
                <br />
                <br />
                <div align='right'>
                    <Button type="button" id='editBtn' onClick={() => useEditProducts(product.id)}>Actualizar</Button>
                    <Button type="button" id='cancelBtn' className='cancelBtn' onClick={() => abrirCerrarModal()}>Cancelar</Button>
                </div>
            </form>
            <Box id='successBoxMd' sx={{display: 'none'}}>
                <SuccessAlert />
            </Box>
            <Box id='errorBoxMd' sx={{display: 'none'}}>
                <ErrorAlert />
            </Box>
        </Box>
    )

    return (
        <>
            <Stack direction="row" alignItems="center">
                <IconButton onClick={() => abrirCerrarModal()} aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Stack>
            <Modal open={modal} onClose={abrirCerrarModal}>{body}</Modal>
        </>
    );
};

export default ModalEdit;