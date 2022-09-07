import axios from 'axios';

const useDeleteProducts = (id) => {
        axios.delete(`http://api.escuelajs.co/api/v1/products/${id}`)
            .then(response => {
                console.log('Eliminacion satisfactoria');
                document.getElementById(id).remove();
                let successBoxPr= document.getElementById('successBoxPr');
                successBoxPr.style= 'display:inline-block';
                setTimeout(function(){
                    successBoxPr.style='display:none';
                },4000);
                //refresh page
                function timedRefresh(timeoutPeriod) {
                setTimeout("location.reload(true);",timeoutPeriod);
            }
            window.onload = timedRefresh(700);
            })
            .catch(error => {
                console.error('Eliminacion erronea ', error);
                let errorBoxMd= document.getElementById('errorBoxMd');
                errorBoxMd.style= 'display:inline-block';
                setTimeout(function(){
                    errorBoxMd.style='display:none';
                },4000);
            });
}

export default useDeleteProducts;