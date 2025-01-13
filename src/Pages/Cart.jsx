import { useContext } from "react";
import { CartContext } from "../App/CartProvider";

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);

    const totalAmount = cart.reduce(
        (sum, item) => sum + item.quantity * (item.price || 0),
        0
    );

    return (
        <div>
            <h1>Votre panier</h1>
            {cart.length === 0 ? (
                <p>Panier vide</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <p>{item.title}</p>
                            <p>Quantité: {item.quantity}</p>
                            <p>Prix: €{(item.price || 0) * item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)}>
                                Enlever
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <h2>Total: €{totalAmount}</h2>
        </div>
    );
}

export default Cart;
