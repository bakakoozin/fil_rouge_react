import PropTypes from "prop-types";

function Card(props) {


	return (
		<article>
			<p>{props.data.title}</p>
		</article>
	);
}

Card.propTypes = {
	data: PropTypes.shape({		
		title: PropTypes.string.isRequired,
	}).isRequired,
};

export default Card;
