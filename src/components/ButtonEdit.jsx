import React from 'react';
import '../styles/ProductItem.scss';
import ModalEdit from './ModalEdit';


const ButtonEdit = ({product}) => {
    return (
        <>
        <ModalEdit product={product}></ModalEdit>
        </>
    );
};

export default ButtonEdit;