import React, { useEffect, useState} from 'react';
import AppContext from '../context/AppContext';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


import ProductList from '@containers/ProductList';
import '@styles/ProductSearch.scss'
import axios from 'axios';


export default function ProductSearch() {
  const [productos, setProductos]= useState([]);
  const [tablaProductos, setTablaProductos]= useState([]);
  const [busqueda, setBusqueda]= useState(['']);

const peticionGet=async()=>{
  await axios.get("https://api.escuelajs.co/api/v1/products")
  .then(response=>{
    setBusqueda(response.data)
    setTablaProductos(response.data);
  }).catch(error=>{
    console.log(error);
  })
}
useEffect(()=>{
  peticionGet();
  },[])


  const [value, setValue] =useState('')
  const [inputValue, setInputValue] = useState('');

  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablaProductos.filter((elemento)=>{
      if(elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setBusqueda(resultadosBusqueda);
  }

  return (
    <div>
      <Autocomplete className='autocomplete'
        value={value}
        onChange={(event, newValue) => {    
          setValue(newValue);
          if (newValue != null){
            filtrar(newValue);
          }else{
            setBusqueda(tablaProductos)
          }
                    
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={tablaProductos.map((option) => option.title)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Busqueda de producto" />}
      />
      <ProductList busqueda={busqueda} ></ProductList>
    </div>
  );
}
