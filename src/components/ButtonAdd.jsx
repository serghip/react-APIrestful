import React from 'react';
import useAddProducts from '../hooks/useAddProducts';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const ButtonAdd = () => {
    return (
            <Stack>
                <IconButton onClick={() => {useAddProducts()}} aria-label="add" size="large">
                    <AddIcon fontSize="inherit" />
                </IconButton>
            </Stack>
    );
};

export default ButtonAdd;