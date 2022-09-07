import useGetProducts from './useGetProducts';

//Colocar aqui la API GET
const API = 'http://api.escuelajs.co/api/v1/products';

const useInitialState = () => {
const products = useGetProducts(API);
	//Llamada y declaracion de productos
	function createData(id, title, price) {
		return { id, title, price };
	}
	const rows = [];
	{
		products.map(product => (
			rows.push(createData(product.id, product.title, product.price))
		))
	};
    return{
        rows
    }
}

export default useInitialState;
  