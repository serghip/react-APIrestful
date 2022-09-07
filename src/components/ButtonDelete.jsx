import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import useDeleteProducts from '../hooks/useDeleteProducts';

export default function DialogConfirm({product}) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Stack direction="row" alignItems="center">
                <IconButton onClick={handleClickOpen} aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Stack>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Confirme acción"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Desea eliminar el producto?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => {handleClose(); useDeleteProducts(product.id);}} >
                        Aceptar
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}