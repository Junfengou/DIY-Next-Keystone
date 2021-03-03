import React from "react";
import { useCart } from "../../lib/cartState";
import CartStyles from "../styles/CartStyles";

function Cart() {
	const { cartOpen, toggleCart } = useCart();

	return (
		<CartStyles open={cartOpen}>
			<button onClick={toggleCart}>Something</button>
		</CartStyles>
	);
}

export default Cart;
