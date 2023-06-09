import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles'
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ cart, handleRemoveFromCart, handleUpdateCartQty, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => {
        return (
            <Typography variant="subtitle1">You have no items on your cart, 
             <Link to="/" className={classes.link}>Start adding some!</Link>
            </Typography>
        )
    }

    const FilledCart = () => {
        return (
            <>
                <Grid container spacing={3} >
                    {cart.line_items.map((item)=>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem
                            item={item} 
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    </Grid>
                    ))}
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant="h4">
                        SubTotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" variant="contained" color="secondary" onClick={handleEmptyCart} >
                            Empty Cart
                        </Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" variant="contained" color="primary" >
                        Checkout
                        </Button>
                    </div>
                </div>
            </>
        )
    }

    if (!cart.line_items) return 'Loading...';
    
    return (
      <Container>
          <div className={classes.toolbar} />
          <Typography className={classes.title} variant="h3">Your shopping cart</Typography>
          {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
  )
 }


export default Cart
