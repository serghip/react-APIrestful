import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonAdd from './ButtonAdd';

import useAddProducts from '../hooks/useAddProducts';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

export default function AddForm() {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <TextField
                    sx={{marginRight:1, marginLeft:1}}
                    id="articuloAdd"
                    label="Producto"
                    defaultValue=""
                />
                <TextField
                    sx={{marginRight:1, marginLeft:1}}
                    id="precioAdd"
                    label="Precio"
                    type="number"
                />
                <Stack>
                <IconButton onClick={() => {useAddProducts()}} aria-label="add" size="large">
                    <AddIcon fontSize="inherit" />
                </IconButton>
                </Stack>
            </Box>
        </>
    );
}