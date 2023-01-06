import axios from 'axios';
const useEditProducts = (id) => {
    
    let articulo = document.getElementById('articulo').value;
    let precio = document.getElementById('precio').value;
    //console.log(precio, articulo)
    axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, {
        title: articulo,
        price: precio
    })
        .then(response => {
            //Deshabilito edicion de inputs
            let articulo = document.getElementById('articulo');
            articulo.disabled=true;
            let precio = document.getElementById('precio')
            precio.disabled=true;
            let editBtn = document.getElementById('editBtn');
            editBtn.style = "display:none";
            let cancelBtn = document.getElementById('cancelBtn');
            cancelBtn.style = "display:none";
            //mensaje de actualizacion correcta
            let errorBoxMd =document.getElementById('errorBoxMd');
            errorBoxMd.style= "display:none";
            let successBoxMd =document.getElementById('successBoxMd');
            successBoxMd.style= "display:flex"
            //refresh page
            function timedRefresh(timeoutPeriod) {
                setTimeout("location.reload(true);",timeoutPeriod);
            }
            window.onload = timedRefresh(2000);
        })
        .catch(error => {
            let errorBoxMd =document.getElementById('errorBoxMd');
            errorBoxMd.style= "display:flex";
            console.error('Actualizacion erronea ', error);
    });

}

export default useEditProducts;
