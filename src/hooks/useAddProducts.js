import axios from 'axios';
const useAddProducts = () => {
    let articuloAdd = document.getElementById('articuloAdd').value;
    let precioAdd = document.getElementById('precioAdd').value;
    //console.log(precioAdd, articuloAdd)
    axios.post('http://api.escuelajs.co/api/v1/products', {
        title: articuloAdd,
        price: precioAdd,
        description: "Description",
        categoryId: 1,
        images: [
            "https://api.lorem.space/image/furniture?w=640&h=480&r=1819",
            "https://api.lorem.space/image/furniture?w=640&h=480&r=1016",
            "https://api.lorem.space/image/furniture?w=640&h=480&r=4639"
        ]
    })
        .then(response => {
            //Deshabilito edicion de inputs
            let articuloAdd = document.getElementById('articuloAdd');
            articuloAdd.disabled = true;
            let precioAdd = document.getElementById('precioAdd')
            precioAdd.disabled = true;
            //mensaje de actualizacion correcta
            let errorBoxAdd = document.getElementById('errorBoxAdd');
            errorBoxAdd.style = "display:none";
            let successBoxAdd = document.getElementById('successBoxAdd');
            successBoxAdd.style = "display:flex"
            //refresh page
            function timedRefresh(timeoutPeriod) {
                setTimeout("location.reload(true);", timeoutPeriod);
            }
            window.onload = timedRefresh(2000);
        })
        .catch(error => {
            let errorBoxAdd =document.getElementById('errorBoxAdd');
            errorBoxAdd.style= "display:flex";
            console.error('Actualizacion erronea ', error);
        });


}

export default useAddProducts;