import React from 'react';
import { Grid } from '@material-ui/core';
import shoes from '../../assets/shoes.jpg';
import towels from '../../assets/towels.jpg';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    {
        id: 1, name: 'Shoes', description: 'Running Shoes', price: '$5', image: shoes
    },
    {
        id: 2, name: 'Towels', description: 'Dry Towels', price: '$10', image: towels
    }
]

const Products = ({products, handleAddToCart}) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}> 
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} handleAddToCart={handleAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;