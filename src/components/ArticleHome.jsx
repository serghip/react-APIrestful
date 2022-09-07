import React from 'react';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

const ArticleHome = () => {
	return (
		<>
			<article style={{ display: 'flex', justifyContent: 'center' }}>
				<Button href="http://api.escuelajs.co/api/v1/products">Codigo base datos de tabla</Button>
				<Snackbar />
				<Button href="http://api.escuelajs.co/docs/">Documentacion de API</Button>
			</article>
		</>
	);
};

export default ArticleHome;