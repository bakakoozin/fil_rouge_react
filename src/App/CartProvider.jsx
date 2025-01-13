import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

function CardProvider(props) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  function addToCart(item) {
    setCart((prevCart) => {
      // Vérifier si l'article est déjà dans le panier
      const existingItem = prevCart.find((product) => product.id === item.id);
      if (existingItem) {
        // Augmenter la quantité de l'article existant
        return prevCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }
      // Ajouter le nouvel article avec une quantité de 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  }

  // Fonction pour supprimer un produit du panier
  function removeFromCart(itemId) {
    setCart((prevCart) => prevCart.filter((product) => product.id !== itemId));
  }

  // Synchroniser le panier avec localStorage à chaque mise à jour du panier
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

CardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartContext };
export default CardProvider;
