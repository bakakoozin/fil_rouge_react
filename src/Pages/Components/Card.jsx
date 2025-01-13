import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../App/CartProvider";

function Card(props) {
  const { addToCart } = useContext(CartContext);

  return (
    <article>
      <img src={props.data.thumbnailUrl} alt={props.data.title} />
      <p>{props.data.title}</p>
      <img src={props.data.url} alt={props.data.title} />
      <button onClick={() => addToCart({ ...props.data, price: 10 })}>
        Ajouter au panier
      </button>
    </article>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
